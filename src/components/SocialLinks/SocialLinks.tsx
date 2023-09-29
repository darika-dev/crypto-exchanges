import { FC } from 'react'

import {
  UilLink,
  UilSlack,
  UilFacebookF,
  UilRedditAlienAlt,
  UilTelegramAlt,
} from '@iconscout/react-unicons'

import { Exchange } from '@/services/CoingeckoService/CoingeckoService.types'

import styles from './SocialLinks.module.css'

interface SocialLinksProps {
  exchange: Exchange
}

export const SocialLinks: FC<SocialLinksProps> = ({ exchange }) => {
  console.log('exchange', exchange)
  const links = [
    {
      logo: <UilFacebookF size="16" color="inherit" />,
      label: 'Facebook',
      url: exchange?.facebook_url || null,
    },
    {
      logo: <UilRedditAlienAlt size="16" color="inherit" />,
      label: 'Reddit',
      url: exchange?.reddit_url || null,
    },
    {
      logo: <UilTelegramAlt size="16" color="inherit" />,
      label: 'Telegram',
      url: exchange?.telegram_url || null,
    },
    {
      logo: <UilSlack size="16" color="inherit" />,
      label: 'Slack',
      url: exchange?.slack_url || null,
    },
    {
      logo: <UilLink size="16" color="inherit" />,
      label: 'Other',
      url: exchange?.other_url_1 || null,
    },
    {
      logo: <UilLink size="16" color="inherit" />,
      label: 'Other',
      url: exchange?.other_url_2 || null,
    },
  ]
  return (
    <ul className={styles.wrapper}>
      {links.map((item, key) => {
        if (!item.url) {
          return
        }
        return (
          <li key={key}>
            <a href={item.url} aria-label={item.label} className={styles.link} target="_blank">
              {item.logo}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
