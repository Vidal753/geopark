'use client'
import '../styles/gallerySection.css'
import { CardImage } from './CardImage'
import { ImageModal } from './ImageModal'
import { useRef, useState } from 'react'

export default function GallerySection ({ images, videos }) {
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
          {images.map((item, index) => (
            <CardImage
              key={index}
              onClick={(image) => {
                showImage(image)
              }}
              banner={item.image}
              alt={item.title}
            />
          ))}
          {videos.map((item) => (
            <video
              key={item.id}
              src={item.video}
              poster={item.miniature}
              width='100%' controls controlsList='nodownload'
            />
          ))}
        </article>
      </section>
      <ImageModal ref={imageModalRef} picture={currentImage} />
    </main>
  )
}
