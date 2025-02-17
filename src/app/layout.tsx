import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import Header from '@/components/nav/header'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Street Ninja',
    default: 'Street Ninja',
  },
  icons: "/images/favicon.ico",
  description:
    "Street Ninja helps people navigate street life with real-time access to food, shelter, wifi, and other resources—fast, simple, and judgment-free.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-background antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      
      <body className="flex h-full flex-col">
        <Header />
        {children}
      </body>
    </html>
  )
}
