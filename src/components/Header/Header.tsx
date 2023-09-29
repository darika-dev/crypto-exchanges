import { FC } from 'react'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container/Container'

import styles from './Header.module.css'

interface HeaderProps {
  metadata: Metadata
}

const Header: FC<HeaderProps> = ({ metadata }) => {
  return (
    <header className={styles.header}>
      <Container>
        <h1 className={styles.title}>
          <Link href="/" className={styles.link}>
            <Image alt="Coin Gecko Logo" src="/images/coingecko-logo.svg" height={30} width={30} />
            <span>{metadata.title ? `${metadata.title}` : ''}</span>
          </Link>
        </h1>
      </Container>
    </header>
  )
}

export { Header }
