import { use } from 'react'

import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage'
import { getExchangesList } from '@/services/CoingeckoService/CoingeckoService'
import { ExchangeListItem } from '@/services/CoingeckoService/CoingeckoService.types'

import styles from './ExchangesList.module.css'
import { ExchangesListItem } from './ExchangesListItem'

export const ExchangesList = () => {
  const exchanges: ExchangeListItem[] | null = use(
    getExchangesList({
      page: '1',
      per_page: '10',
    }),
  )

  if (!exchanges) {
    return <ErrorMessage />
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <tbody>
          {exchanges?.map((item) => <ExchangesListItem key={item.id} exchange={item} />)}
        </tbody>
      </table>
    </div>
  )
}
