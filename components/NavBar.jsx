import '../styles/component/navbar.css'
import DarkModeButton from './DarkModeButton'

export default function NavBar () {
  return (
    <nav className='nav'>
      <section className='nav__container container'>
        <div className='nav__logo'>
          <a href='#'>Geoparque</a>
          <DarkModeButton />
        </div>
        <div>
          <ul className='nav__menu'>
            <li className='nav__menu-item'>
              <a className='nav__menu-link'>Home</a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  )
}
