import '../styles/component/subMenu.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Submenu = ({ label, items }) => {
  return (
    <section className='submenu'>
      <p>{label}</p>
      <FontAwesomeIcon className='submenu__icon' icon={faChevronDown} />
      <article className='submenu__container'>
        {
          items?.map(item => (
            <Link href={item.href} key={item.value} className='submenu__item'>
              <p className='submenu__label'>{item.label}</p>
            </Link>
          ))
        }
      </article>
    </section>
  )
}

export default Submenu
