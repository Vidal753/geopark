'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/component/navbar.css'
import Submenu from './Submenu'
import Link from 'next/link'
import { motion, animate, stagger } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { DropDownDrawer } from './DropDownDrawer'

// web options
const menuItems = [
  { label: 'Inicio', value: 1, href: '/' },
  { label: 'Organización', value: 2, href: '/' },
  { label: 'Misión y visión', value: 3, href: '/mision-vision' },
  { label: 'Objetivos', value: 4, href: '/' }
]

const municipioItems = [
  { label: 'La libertad', value: 1, href: '/' },
  { label: 'Juigalpa', value: 2, href: '/' },
  { label: 'San Pedro', value: 3, href: '/' }
]

// mobile options
const drawerItems = [
  {
    title: 'GEOPARQUE',
    description: 'geoparque',
    options: [
      { name: 'Inicio', route: '/' },
      { name: 'Organización', route: '/' },
      { name: 'Misión y Visión', route: '/mision-vision' },
      { name: 'Objetivos', route: '/' }
    ]
  },
  {
    title: 'MINICIPIOS',
    description: 'municipios',
    options: [
      { name: 'La Libertad', route: '/' },
      { name: 'Juigalpa', route: '/' },
      { name: 'San Pedro', route: '/' }
    ]
  }
]

export default function NavBar () {
  const router = useRouter()
  const [currentOption, setCurrentOption] = useState('')

  const openDrawer = () => {
    animate('.drawer', { scale: 1 }, { duration: 0 })
    animate('.drawer__container', { x: 0 }, { duration: 0.3, delay: 0.1 })
    animate('.drawer__item', { x: 0, scale: 1, opacity: 1 }, { duration: 0.4, delay: stagger(0.1) })
  }

  const closeDrawer = () => {
    animate('.drawer__container', { x: '-100%' }, { duration: 0.3 })
    animate('.drawer', { scale: 0 }, { duration: 0, delay: 0.4 })
    animate('.drawer__item', { x: '-80%', scale: 0, opacity: 0 }, { duration: 0.4, delay: 0.5 })
    setCurrentOption('')
  }

  const changeRoute = (route) => () => {
    router.push(route)
    closeDrawer()
  }

  return (
    <nav className='nav'>

      {/* mobile navbar */}
      <motion.section onClick={closeDrawer} initial={{ scale: 0 }} className='drawer'>
        <motion.article onClick={(e) => e.stopPropagation()} initial={{ x: '-100%' }} className='drawer__container'>
          <p onClick={changeRoute('/')} className='drawer__item__title'>GENERAL</p>
          {
            drawerItems.map((item, index) => (
              <DropDownDrawer key={index} currentOption={currentOption} setCurrentOption={setCurrentOption} navigate={changeRoute} {...item} />
            ))
          }
        </motion.article>
      </motion.section>
      <section className='nav__mobile'>
        <div onClick={openDrawer} className='nav__mobile__icon'>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </section>

      {/* web navbar */}
      <section className='nav__container'>
        <article className='nav__logo'>
          <Submenu label='Geoparque' items={menuItems} />
        </article>
        <article className='nav__menu'>
          <ul className='nav__menu__container'>
            <li className='nav__menu-item'>
              <Link href='/' className='nav__menu-link'>General</Link>
            </li>
          </ul>
          <Submenu label='Municipios' items={municipioItems} />
        </article>
      </section>
    </nav>
  )
}
