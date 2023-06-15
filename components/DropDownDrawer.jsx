import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export const DropDownDrawer = ({ options, description, setCurrentOption, navigate, title, currentOption }) => {
  return (
    <motion.div initial={{ x: '-80%', scale: 0.3, opacity: 0 }} className='drawer__item'>
      <div onClick={() => setCurrentOption(description)} className='drawer__item__title'>
        <p>{title}</p>
        <FontAwesomeIcon className='drawer__item__icon' icon={faCaretDown} />
      </div>
      <motion.div initial={{ height: 0, overflow: 'hidden' }} animate={currentOption === description ? { height: 'auto' } : { height: 0 }} className='drawer__item__option'>
        {
          options.map((option, index) => (
            <div key={index} onClick={navigate(option.route)} className='drawer__item__button'>
              <p>{option.name}</p>
            </div>
          ))
        }
      </motion.div>
    </motion.div>
  )
}
