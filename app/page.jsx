import '../styles/landingSection.css'
import DocSection from '../components/InfoSection'
import NewsSection from '@/components/NewsSection'
import GallerySection from '@/components/GallerySection'

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
      <DocSection />
      <NewsSection />
      <GallerySection images={images} videos={videos} />
    </main>
  )
}
