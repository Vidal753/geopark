import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Geoparque',
  description: 'Creado por estudiante de la UNI Keyling Fargas'
}

const getCity = async () => {
  const res = await fetch('http://localhost:8000/api/city/')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function RootLayout ({ children }) {
  const cities = await getCity()
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar cities={cities} />
        <div className='separator' />
        {children}
      </body>
    </html>
  )
}
