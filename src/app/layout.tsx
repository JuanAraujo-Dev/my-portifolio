import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'

const inter = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'] 
})

export const metadata: Metadata = {
  title: 'Juan Araujo',
  description: 'Juan Araujo, a versatile software engineer and network analyst, excels in developing scalable applications, seamlessly merging software architecture and network efficiency. With expertise in distributed systems and security, his portfolio highlights a proven ability to streamline complex technical challenges into effective solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
