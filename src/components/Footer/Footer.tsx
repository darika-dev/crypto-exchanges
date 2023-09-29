import { FC } from 'react'

import type { Metadata } from 'next'

import { Container } from '@/components/Container/Container'

import styles from './Footer.module.css'

interface FooterProps {
  metadata: Metadata
}

const Footer: FC<FooterProps> = ({ metadata }) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          © {new Date().getFullYear()} {metadata.title ? `${metadata.title}` : ''}. Powered with{' '}
          <span role="img" aria-label="Love" className={styles.heart}>
            ♥
          </span>
        </p>
      </Container>
    </footer>
  )
}

export { Footer }
