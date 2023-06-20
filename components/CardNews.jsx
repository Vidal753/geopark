import '../styles/component/cardNews.css'
import calendar from '../public/icons/calendar.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function News ({ id, title, date, description, banner }) {
  return (
    <Link className='news__container' as={`/${id}/noticia`} href='/[id]/noticia'>
      <Image
        className='news__banner'
        src={banner}
        alt='banner'
        width={300}
        height={200}
      />
      <article className='news__information'>
        <h3 className='news__text'>{title}</h3>
        <figure className='news__date'>
          <Image src={calendar} alt='calendar-icon' width={20} height={20} />
          <p className='news__text'>{date}</p>
          <figure className='news__chevron'>
            <FontAwesomeIcon icon={faChevronRight} className='news__chevron__icon' />
          </figure>
        </figure>
        <p className='news__text'>{description}
        </p>
      </article>
    </Link>
  )
}
