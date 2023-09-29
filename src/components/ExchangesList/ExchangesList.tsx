import { use } from 'react'

import { getExchangesList } from '@/services/CoingeckoService/CoingeckoService'
import { ExchangeListItem } from '@/services/CoingeckoService/CoingeckoService.types'

import styles from './ExchangesList.module.css'

export const ExchangesList = () => {
  const exchanges: ExchangeListItem[] | null = use(
    getExchangesList({
      page: '1',
      per_page: '10',
    }),
  )
  console.log('exchanges', exchanges)

  return <div className={styles.list}></div>
}
