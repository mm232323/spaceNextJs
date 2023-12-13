import type { Metadata } from 'next'
import { Comfortaa} from 'next/font/google'
import { Quicksand } from 'next/font/google'
import './globals.css'

const comfortaa = Comfortaa({
  weight:'variable',
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: 'Space',
  description: 'Developed by Mohammed Sayed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
