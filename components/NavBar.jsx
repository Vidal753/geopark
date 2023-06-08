import '../styles/component/navbar.css'
import Submenu from './Submenu'
import Link from 'next/link'

export default function NavBar () {
  const menuItems = [
    { label: 'Inicio', value: 1 },
    { label: 'Organización', value: 2 },
    { label: 'Misión', value: 3 },
    { label: 'Visión', value: 4 },
    { label: 'Objetivos', value: 5 }
  ]

  const municipioItems = [
    { label: 'La libertad', value: 1 },
    { label: 'Juigalpa', value: 2 },
    { label: 'San Pedro', value: 3 }
  ]

  return (
    <nav className='nav'>
      <section className='nav__container container'>
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
