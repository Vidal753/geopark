'use client'
import '../styles/galleryPage.css'
import banner from '../public/img/banner.jpeg'
import { CardImage } from './CardImage'
import { ImageModal } from './ImageModal'
import { useRef, useState } from 'react'

export default function GalleryPage () {
  const imageModalRef = useRef(null)
  const [currentImage, setCurrentImage] = useState(null)

  const showImage = (image) => {
    setCurrentImage(image)
    imageModalRef.current.showImage()
  }

  return (
    <main className='gallery'>
      <section className='gallery__container container'>
        <h2 className='gallery__title'>Galeria</h2>
        <article className='gallery__grid'>
          {[1, 2, 3, 4].map((item, index) => (
            <CardImage
              key={index}
              onClick={(image) => {
                showImage(image)
              }}
              banner={banner}
            />
          ))}
          <video
            src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
            width='100%' controls controlsList='nodownload' poster='https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg'
          />
        </article>
      </section>
      <ImageModal ref={imageModalRef} banner={currentImage} />
    </main>
  )
}
