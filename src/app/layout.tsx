import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({ subsets: ['vietnamese'], weight: ["400"]})

export const metadata: Metadata = {
  title: 'App QUIZ',
  description: 'Perguntas e respostas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`bg-indigo-500  ${inter.className}`}>{children}</body>
    </html>
  )
}
