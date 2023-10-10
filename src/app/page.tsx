'use client'

import { Suspense, useState } from 'react'

import { Container } from '@/components/Container/Container'
import { ExchangesList } from '@/components/ExchangesList/ExchangesList'
import styles from '@/components/ExchangesList/ExchangesList.module.css'
import { Loading } from '@/components/Loading/Loading'
import { Pagination } from '@/components/Pagination/Pagination'

export default function Home() {
  const DEFAULT_PAGE = 1
  const PAGE_SIZE = 10

  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE)

  return (
    <Container>
      <div className={styles.container}>
        <Suspense fallback={<Loading />}>
          <ExchangesList
            query={{
              page: currentPage.toString(),
              per_page: PAGE_SIZE.toString(),
            }}
          />
        </Suspense>
      </div>

      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
    </Container>
  )
}
