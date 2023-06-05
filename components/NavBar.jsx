import '../styles/component/navbar.css'

export default function NavBar () {
  return (
    <nav className='nav'>
      <section className='nav__container container'>
        <div>
          <a href='#' className='nav__logo'>Geoparque</a>
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
