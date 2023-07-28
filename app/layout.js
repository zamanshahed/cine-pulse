import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LoadingModal from './components/modal/LoadingModal'
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
        <LoadingModal />
        <Navbar />
        <div className='max-w-7xl w-full mx-auto px-3 pt-20 lg:px-5 lg:pt-[120px]'>
          {children}
        </div>
        <div className='pt-5 xl:pt-10 w-full text-center pb-5'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
