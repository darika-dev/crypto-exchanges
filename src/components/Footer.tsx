import { FC } from 'react'

import type { Metadata } from 'next'

interface FooterProps {
  metadata: Metadata
}

const Footer: FC<FooterProps> = ({ metadata }) => {
  return (
    <footer className="border-t border-gray-300 py-5">
      <div className="container">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} {metadata.title ? `${metadata.title}` : ''}. Powered with{' '}
          <span role="img" aria-label="Love" className="text-pink-500">
            ♥
          </span>
        </p>
      </div>
    </footer>
  )
}

export { Footer }
