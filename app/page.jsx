import '../styles/landingPage.css'
import DocPage from '../components/InfoPage'
import NewsPage from '@/components/NewsPage'
import GalleryPage from '@/components/GalleryPage'

export default function Home () {
  return (
    <main>
      <section className='banner'>
        <div className='banner__container'>
          <h3 className='banner__text'>Geoparque cerrania de amerrisque</h3>
          <h3 className='banner__text'>Un Geoparque de extraordinariariqueza natural y cultural</h3>
        </div>
      </section>
      <DocPage />
      <NewsPage />
      <GalleryPage />
    </main>
  )
}
