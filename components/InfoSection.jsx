import '../styles/infoSection.css'
import banner from '../public/img/banner.jpeg'
import Image from 'next/image'

export default function DocSection () {
  return (
    <main className='info'>
      <section className='info__container'>
        <section className='info__text__container'>
          <h2 className='info__text'>Parque serranías amerrisque </h2>
          <p>
            Es un territorio que cuenta con un patrimonio geológico de importancia internacional, es decir, las rocas, minerales y fósiles que ahí se encuentran son reconocidos mundialmente por su singular proceso de formación, edad y otras características.
            Este patrimonio geológico junto con el natural y cultural, son utilizados para generar el desarrollo sostenible de las comunidades locales, no solo a través del incremento.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis veritatis voluptatum nam quidem eius vel sapiente aut, officiis laudantium accusamus odio, amet optio? Quo temporibus laborum laudantium voluptatum consectetur!
          </p>
        </section>
        <figure className='info__image'>
          <Image src={banner} alt='banner' fill className='info__image__container' />
        </figure>
      </section>
    </main>
  )
}
