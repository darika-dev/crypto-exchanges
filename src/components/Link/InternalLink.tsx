import { PropsWithChildren, FC } from 'react'

import Link from 'next/link'

import styles from './InternalLink.module.css'

interface InternalLinkProps {
  href: string
}

export const InternalLink: FC<PropsWithChildren<InternalLinkProps>> = ({
  href,
  children,
  ...linkProps
}) => {
  return (
    <Link href={href} className={styles.link} {...linkProps}>
      <span className={styles.inner}>{children}</span>
    </Link>
  )
}
