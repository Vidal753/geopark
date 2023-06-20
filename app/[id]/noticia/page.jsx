import Image from 'next/image'
import '../../../styles/newsPage.css'

const getNews = async () => {
  const res = await fetch('http://localhost:8000/api/news/', { cache: 'no-store' })
  return res.json()
}

export default async function page ({ params }) {
  const news = await getNews()
  const { id } = params
  const currentNews = news.find((item) => item.id === Number(id))
  return (
    <section className='news__detail'>
      <article className='news__detail__banner'>
        <Image className='news__detail__img' src={currentNews.banner} alt='banner' fill />
      </article>
      <article className='news__detail__content'>
        <h1 className='news__detail--text'>{currentNews.title}</h1>
        <p className='news__detail--text'>{currentNews.description}</p>
      </article>
    </section>
  )
}
