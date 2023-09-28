import type { Metadata } from 'next'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Wrapper } from '@/components/Wrapper/Wrapper'

import 'reset-css';
import '../styles/globals.css';

const title = 'Cryptocurrency exchanges';
const description =
  'Cryptocurrency Exchange Directory utilizing Typescript, Next.js, React, CSS Modules and Coingecko API, tested using Cypress and Jest.';

export const metadata: Metadata = {
  title,
  description,
  themeColor: '#ffffff',
  robots: 'index',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        sizes: '32x32',
        url: 'favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        url: 'favicon-16x16.png',
      },
    ],
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en-EN',
    images: [{ url: `https://lyonjs.org/lyonjs.webp`, width: 600, height: 338 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://lyonjs.org/lyonjs.webp`],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          <div>
            <Header metadata={metadata} />
            <div>{children}</div>
          </div>

          <Footer metadata={metadata} />
        </Wrapper>
      </body>
    </html>
  )
}
