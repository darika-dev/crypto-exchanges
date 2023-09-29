'use client'

import React, { FC, useMemo } from 'react'

import { useRouter } from 'next/navigation'

import { ExternalLink } from '@/components/Link/ExternalLink'
import { InternalLink } from '@/components/Link/InternalLink'
import { ExchangeListItem } from '@/services/CoingeckoService/CoingeckoService.types'

import styles from './ExchangesList.module.css'

interface ExchangesListItemProps {
  exchange: ExchangeListItem
}

export const ExchangesListItem: FC<ExchangesListItemProps> = ({ exchange }) => {
  const router = useRouter()

  const readableUrl = useMemo(
    () => new URL(exchange.url).host.toString().replace('www.', ''),
    [exchange.url],
  )

  const stopPropagation = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
  }

  return (
    <tr className={styles.row} onClick={() => router.push(`/exchange/${exchange.id}`)}>
      <td className={styles.td}>{exchange.trust_score_rank}</td>
      <td className={styles.td}>
        <img src={exchange.image} alt={exchange.name} className={styles.logo} />
      </td>
      <td className={`${styles.td} ${styles.full}`}>
        <div><InternalLink href={`/exchange/${exchange.id}`}>{exchange.name}</InternalLink></div>
        <div className={styles.country}>{exchange.country}</div>
      </td>
      <td className={`${styles.td} ${styles.full}`}>
        <ExternalLink
          href={exchange.url}
          onClick={(event) => {
            stopPropagation(event)
          }}
        >
          {readableUrl}
        </ExternalLink>
      </td>
    </tr>
  )
}
