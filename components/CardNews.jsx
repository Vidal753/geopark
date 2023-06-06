import '../styles/component/cardNews.css'
import banner from '../public/img/banner.jpeg'
import calendar from '../public/icons/calendar.png'
import Image from 'next/image'

export default function News () {
  return (
    <section className='news__container'>
      <Image
        className='news__banner'
        src={banner}
        alt='banner'
        width={300}
        height={200}
      />
      <article className='news__information'>
        <h3 className='news__text'>BENDECIDAS MADRES DEL 2023 EN JUIGALPA</h3>
        <figure className='news__date'>
          <Image src={calendar} alt='calendar-icon' width={20} height={20} />
          <p className='news__text'>16 enero, 2023</p>
        </figure>
        <p className='news__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fuga vel distinctio possimus voluptatem placeat consequuntur similique aliquid reiciendis magni. Qui ullam, fugit voluptates rem autem itaque ipsa molestiae excepturi. Lorem ipsum dolor sit amet consectetur ad
        </p>
      </article>
    </section>
  )
}
