import { CardDocument } from './CardDocument'
import '../styles/documentSection.css'

export default function DocumentSection () {
  return (
    <div className='document'>
      <section className='document__container'>
        <h2 className='document__title'>Documentos</h2>
        <article className='document__content'>
          {[1, 2, 3, 4].map((item, index) => (
            <CardDocument key={index} />
          ))}
        </article>
      </section>
    </div>
  )
}
