'use client'

import { use, FC } from 'react'

import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage'
import { getExchangesList } from '@/services/CoingeckoService/CoingeckoService'
import { ExchangeListItem } from '@/services/CoingeckoService/CoingeckoService.types'

import styles from './ExchangesList.module.css'
import { ExchangesListItem } from './ExchangesListItem'

interface ExchangesListProps {
  query: {
    page: string
    per_page: string
  }
}

export const ExchangesList: FC<ExchangesListProps> = ({ query }) => {
  const exchanges: ExchangeListItem[] | null = use(getExchangesList(query))

  if (!exchanges) {
    return <ErrorMessage />
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table} data-testid="exchange-table">
        <tbody>
          {exchanges?.map((item) => <ExchangesListItem key={item.id} exchange={item} />)}
        </tbody>
      </table>
    </div>
  )
}
