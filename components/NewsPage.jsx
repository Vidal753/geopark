import CardNews from './CardNews'
import '../styles/newPage.css'

export default function NewsPage () {
  return (
    <main className='news container'>
      <h2 className='news__title'>Noticias</h2>
      <article className='news__content'>
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </article>
    </main>
  )
}
