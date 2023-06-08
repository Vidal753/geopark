import CardNews from './CardNews'
import '../styles/newsPage.css'

export default function NewsPage () {
  return (
    <main className='news'>
      <section className='news__page__container container'>
        <h2 className='news__title'>Noticias</h2>
        <article className='news__content'>
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
        </article>
      </section>
    </main>
  )
}
