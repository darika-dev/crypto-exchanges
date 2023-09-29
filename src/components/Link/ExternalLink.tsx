import { FC, ReactNode } from 'react'

import styles from './ExternalLink.module.css'

interface ExternalLinkProps {
  href: string
  children: ReactNode
}

export const ExternalLink: FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className={styles.link} target="_blank">
      <span>{children}</span>
    </a>
  )
}
