import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cryptocurrency exchanges',
  description:
    'Cryptocurrency Exchange Directory utilizing Typescript, Next js (React), Tailwind CSS and Coingecko API, tested using Cypress and Jest.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col justify-between w-full min-h-screen antialiased">
          <div>
            <Header metadata={metadata} />
            <div className="container py-8">{children}</div>
          </div>

          <Footer metadata={metadata} />
        </main>
      </body>
    </html>
  )
}
