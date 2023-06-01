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
      <body className={`${inter.className} bg-zinc-700 text-white`}>
        <Navbar />
        <div className='max-w-7xl w-full mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
