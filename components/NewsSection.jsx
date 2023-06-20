import CardNews from './CardNews'
import '../styles/newsSection.css'

const getNews = async () => {
  const res = await fetch('http://localhost:8000/api/news/', { cache: 'no-store' })
  return res.json()
}

export default async function NewsSection () {
  const news = await getNews()
  return (
    <main className='news'>
      <section className='news__page__container container'>
        <h2 className='news__title'>Noticias</h2>
        <article className='news__content'>
          {news.map((item) => (
            <CardNews key={item.id} {...item} />
          ))}
        </article>
      </section>
    </main>
  )
}
