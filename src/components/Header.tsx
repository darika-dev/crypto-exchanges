import { FC } from 'react'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  metadata: Metadata
}

const Header: FC<HeaderProps> = ({ metadata }) => {
  return (
    <header className="py-5 border-b border-gray-300">
      <div className="container">
        <h1 className="flex">
          <Link
            href="/"
            className="flex gap-x-2 items-center text-gray-900 hover:text-gray-600 transition"
          >
            <Image alt="Coin Gecko Logo" src="/images/coingecko-logo.svg" height={30} width={30} />
            <span>{metadata.title ? `${metadata.title}` : ''}</span>
          </Link>
        </h1>
      </div>
    </header>
  )
}

export { Header }
