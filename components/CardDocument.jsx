'use client'
import '../styles/component/cardDocument.css'
import Image from 'next/image'
import Link from 'next/link'

export const CardDocument = ({ title, description, poster, document }) => {
  return (
    <Link className='document__card' href={document}>
      <Image
        className='document__banner'
        src={poster}
        alt='banner'
        width={300}
        height={250}
      />
      <article className='document__information'>
        <figure className='document__chevron'>
          <p>Documento</p>
        </figure>
        <h3 className='document__text'>{title}</h3>
        <p className='document__text'>{description}</p>
      </article>
    </Link>
  )
}
