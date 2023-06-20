import { CardDocument } from './CardDocument'
import '../styles/documentSection.css'

const getDocuments = async () => {
  const res = await fetch('http://localhost:8000/api/documents/')
  return res.json()
}

export default async function DocumentSection () {
  const documents = await getDocuments()
  return (
    <div className='document'>
      <section className='document__container'>
        <h2 className='document__title'>Documentos</h2>
        <article className='document__content'>
          {documents.map((document) => (
            <CardDocument key={document.id} {...document} />
          ))}
        </article>
      </section>
    </div>
  )
}
