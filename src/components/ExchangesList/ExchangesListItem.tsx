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

  const readableUrl = useMemo(() => {
    return exchange.url.startsWith('http')
      ? new URL(exchange.url).host.toString().replace('www.', '')
      : exchange.url
  }, [exchange.url])

  const stopPropagation = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
  }

  return (
    <tr
      className={styles.row}
      onClick={() => router.push(`/exchange/${exchange.id}`)}
      data-testid="exchange-item"
    >
      <td className={styles.td} data-testid="exchange-trust-score-rank">
        {exchange.trust_score_rank}
      </td>
      <td className={styles.td}>
        <img
          src={exchange.image}
          alt={exchange.name}
          className={styles.logo}
          data-testid="exchange-logo"
        />
      </td>
      <td className={`${styles.td} ${styles.full}`}>
        <div>
          <InternalLink href={`/exchange/${exchange.id}`} data-testid="exchange-name">
            {exchange.name}
          </InternalLink>
        </div>
        <div className={styles.country} data-testid="exchange-country">
          {exchange.country}
        </div>
      </td>
      <td className={`${styles.td} ${styles.full}`}>
        <ExternalLink
          href={exchange.url}
          onClick={(event) => {
            stopPropagation(event)
          }}
          data-testid="exchange-link"
        >
          {readableUrl}
        </ExternalLink>
      </td>
    </tr>
  )
}
