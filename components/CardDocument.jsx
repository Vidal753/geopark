import '../styles/component/cardDocument.css'
import banner from '../public/img/banner.jpeg'
import Image from 'next/image'

export const CardDocument = () => {
  return (
    <section className='document__card'>
      <Image
        className='document__banner'
        src={banner}
        alt='banner'
        width={300}
        height={250}
      />
      <article className='document__information'>
        <figure className='document__chevron'>
          <p>Documento</p>
        </figure>
        <h3 className='document__text'>Historia</h3>
        <p className='document__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam quis voluptates, doloribus autem illo debitis praesentium eligendi repellat, molestias qui harum fuga provident voluptatibus sint illum adipisci aut voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </article>
    </section>
  )
}
