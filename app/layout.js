import Header from '@/components/Header/Header'
import { inter, playfair } from './fonts'
import '@/styles/globals.css'

export const metadata = {
  title: 'KaramUniko Museum',
  description: 'Museum website built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
