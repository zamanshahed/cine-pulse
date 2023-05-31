import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cine Pulse',
  description: 'Cine Pulse: The Movie Database',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
