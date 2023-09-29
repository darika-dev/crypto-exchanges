'use client'
import { FC } from 'react'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Container } from '@/components/Container/Container'

import styles from './Header.module.css'

interface HeaderProps {
  metadata: Metadata
}

export const Header: FC<HeaderProps> = ({ metadata }) => {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.column}>
            {pathname !== '/' && (
              <Link href="/" className={styles.back}>
                <span className={styles.inner}>Go Back</span>
              </Link>
            )}
          </div>
          <h1 className={styles.title}>
            <Link href="/" className={styles.link}>
              <Image
                alt="Coin Gecko Logo"
                src="/images/coingecko-logo.svg"
                height={30}
                width={30}
              />
              <span>{metadata.title ? `${metadata.title}` : ''}</span>
            </Link>
          </h1>
          <div className={styles.column}></div>
        </div>
      </Container>
    </header>
  )
}
