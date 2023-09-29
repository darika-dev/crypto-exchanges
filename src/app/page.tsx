'use client'

import { Suspense } from 'react'

import { Container } from '@/components/Container/Container'
import { ExchangesList } from '@/components/ExchangesList/ExchangesList'
import { Loading } from '@/components/Loading/Loading'

export default function Home() {
  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <ExchangesList />
      </Suspense>
    </Container>
  )
}
