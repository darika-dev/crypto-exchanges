import { PropsWithChildren, FC, MouseEvent } from 'react'

import styles from './ExternalLink.module.css'

interface ExternalLinkProps {
  href: string
  variant?: 'title' | 'default'
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

export const ExternalLink: FC<PropsWithChildren<ExternalLinkProps>> = ({
  href,
  children,
  variant = 'default',
  ...linkProps
}) => {
  return (
    <a
      href={href}
      className={`${styles.link} ${variant === 'title' && styles.title} ${
        variant === 'default' && styles.default
      }`}
      target="_blank"
      {...linkProps}
    >
      <span>{children}</span>
    </a>
  )
}
