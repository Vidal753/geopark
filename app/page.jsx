import '../styles/landingPage.css'
import DocPage from '../components/InfoPage'
import NewsPage from '@/components/NewsPage'
import GalleryPage from '@/components/GalleryPage'

const getImages = async () => {
  const res = await fetch('http://localhost:8000/api/images/', { cache: 'no-cache' })
  return res.json()
}

const getVideos = async () => {
  const res = await fetch('http://localhost:8000/api/videos/', { cache: 'no-cache' })
  return res.json()
}

export default async function Home () {
  const images = await getImages()
  const videos = await getVideos()
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
      <GalleryPage images={images} videos={videos} />
    </main>
  )
}
