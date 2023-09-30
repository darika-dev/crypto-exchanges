import { FC, use } from 'react'

import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage'
import { ExternalLink } from '@/components/Link/ExternalLink'
import { SocialLinks } from '@/components/SocialLinks/SocialLinks'
import { getExchangeItem } from '@/services/CoingeckoService/CoingeckoService'
import { Exchange } from '@/services/CoingeckoService/CoingeckoService.types'

import styles from './ExchangeDetails.module.css'

interface ExchangeDetailsProps {
  id: string
}

export const ExchangeDetails: FC<ExchangeDetailsProps> = ({ id }) => {
  const exchange: Exchange | null = use(getExchangeItem(id))

  if (!exchange) {
    return <ErrorMessage />
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <img
          src={exchange.image}
          alt={exchange.name}
          className={styles.logo}
          data-testid="exchange-logo"
        />
        <div className={styles.info} data-testid="exchange-info">
          <div>
            <ExternalLink href={exchange.url} variant="title">
              {exchange.name}
            </ExternalLink>
            <div className={styles.points}>
              <div>
                <span className={styles.trust}>⛨</span>
                {exchange.trust_score_rank}
              </div>
              <div>{exchange.country}</div>
              <div>{exchange.year_established}</div>
            </div>
          </div>
          <div>
            <SocialLinks exchange={exchange} data-testid="exchange-social-links" />
          </div>
        </div>
      </div>
      {exchange.description && <div className={styles.description}>{exchange.description}</div>}
    </div>
  )
}
