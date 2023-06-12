'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import '../styles/component/imageModal.css'
import { useAnimate, motion } from 'framer-motion'
import Image from 'next/image'
import { forwardRef, useImperativeHandle } from 'react'
import banner from '../public/img/banner.jpeg'

export const ImageModal = forwardRef(({ picture }, ref) => {
  const [modalContent, animateModalContent] = useAnimate()
  const [modal, animateModal] = useAnimate()

  const showImage = () => {
    animateModal(modal.current, { scale: 1 }, { duration: 0 })
    animateModalContent(modalContent.current, { opacity: 1 }, { duration: 0.2, delay: 0.1 })
  }

  const hideImage = (e) => {
    animateModalContent(modalContent.current, { opacity: 0 }, { duration: 0.2 })
    animateModal(modal.current, { scale: 0 }, { duration: 0, delay: 0.2 })
  }

  useImperativeHandle(ref, () => ({
    showImage,
    hideImage
  }))

  return (
    <motion.main initial={{ scale: 0 }} ref={modal}>
      <motion.section initial={{ opacity: 0 }} ref={modalContent} onClick={hideImage} className='modal'>
        <article className='modal__close'>
          <FontAwesomeIcon icon={faClose} />
        </article>
        <motion.article className='modal__container'>
          <Image src={picture ?? banner} alt='banner' fill />
        </motion.article>
      </motion.section>
    </motion.main>
  )
})

ImageModal.displayName = 'ImageModal'
