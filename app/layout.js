import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Geoparque',
  description: 'Creado por estudiante de la UNI Keyling Fargas'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        <div className='separator' />
        {children}
      </body>
    </html>
  )
}
