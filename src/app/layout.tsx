import Head from 'next/head'
import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import Header from '@/components/nav/header'
import Providers from './providers'
import clsx from 'clsx'
import RootLayoutInner from '@/components/layout/root-layout-inner'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Street Ninja',
    default: 'Street Ninja',
  },
  icons: "/images/favicon.ico",
  description:
    "Street Ninja helps people navigate street life with real-time access to food, shelter, wifi, and other resources—fast, simple, and judgment-free.",
    robots: {
      index: true,
      follow: true,
    },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children, }: {children: React.ReactNode}) {

  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-background antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <Head>
        <title>Street Ninja</title>
        <meta name="description" content={metadata.description ?? ""} />
        <link rel="preload" as="image" href="/images/bg-abstract-white.webp" type="image/webp" />
      </Head>
      <body className="flex h-full flex-col">
        <Providers>
          <Header />
            <RootLayoutInner>
              {children}
            </RootLayoutInner>
        </Providers>
      </body>
    </html>
  )
}
