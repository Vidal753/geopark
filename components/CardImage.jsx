'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const container = {
  position: 'relative',
  height: '100%',
  width: '100%',
  cursor: 'pointer'
}

export const CardImage = ({ onClick, banner, alt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      style={container} onClick={() => { onClick(banner) }}
    >
      <Image src={banner} alt={alt} fill />
    </motion.div>
  )
}
