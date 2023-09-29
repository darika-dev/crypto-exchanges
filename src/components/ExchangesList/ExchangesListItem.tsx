import { FC, useMemo } from 'react'

import { ExternalLink } from '@/components/Link/ExternalLink'
import { ExchangeListItem } from '@/services/CoingeckoService/CoingeckoService.types'

import styles from './ExchangesList.module.css'

interface ExchangesListItemProps {
  exchange: ExchangeListItem
}

export const ExchangesListItem: FC<ExchangesListItemProps> = ({ exchange }) => {
  const readableUrl = useMemo(
    () => new URL(exchange.url).host.toString().replace('www.', ''),
    [exchange.url],
  )
  return (
    <tr className={styles.row}>
      <td className={styles.td}>{exchange.trust_score_rank}</td>
      <td className={styles.td}>
        <img src={exchange.image} alt={exchange.name} className={styles.logo} />
      </td>
      <td className={`${styles.td} ${styles.full}`}>
        <div>{exchange.name}</div>
        <div className={styles.country}>{exchange.country}</div>
      </td>
      <td className={`${styles.td} ${styles.full}`}>
        <ExternalLink href={exchange.url}>{readableUrl}</ExternalLink>
      </td>
    </tr>
  )
}
