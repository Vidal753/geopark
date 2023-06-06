'use client'
import { useEffect, useState } from 'react'
import '../styles/component/darkModeButton.css'
import Image from 'next/image'
import sun from '../public/icons/sun.png'
import moon from '../public/icons/moon.png'

export default function DarkModeButton () {
  const domTheme = document.querySelector('body').getAttribute('data-theme')
  const [theme, setTheme] = useState(domTheme)

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    setTheme('dark')
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
    setTheme('light')
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode()
    }
  }, [])

  const toggleTheme = () => {
    const theme = document.querySelector('body').getAttribute('data-theme')
    if (theme === 'dark') {
      setLightMode()
    } else {
      setDarkMode()
    }
  }

  return (
    <button className='theme__button' onClick={toggleTheme}>
      <Image src={theme === 'dark' ? moon : sun} alt='sun-icon' width={20} height={20} />
    </button>
  )
}
