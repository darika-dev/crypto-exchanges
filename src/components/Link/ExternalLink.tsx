import { FC, ReactNode } from 'react'

import styles from './ExternalLink.module.css'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  onClick?: () => void
  variant?: 'title' | 'default'
}

export const ExternalLink: FC<ExternalLinkProps> = ({
  href,
  children,
  onClick,
  variant = 'default',
}) => {
  return (
    <a
      href={href}
      className={`${styles.link} ${variant === 'title' && styles.title} ${
        variant === 'default' && styles.default
      }`}
      target="_blank"
      onClick={onClick}
    >
      <span>{children}</span>
    </a>
  )
}
