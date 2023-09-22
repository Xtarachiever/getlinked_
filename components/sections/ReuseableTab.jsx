"use client";
import { AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';

const ReuseableTab = ({content}) => {

  const variants = {
    hidden: {opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.3
        }
    }
}

const FAQS = {
    hidden:{
        opacity:0,
        y:20,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
          ease:[0.17,0.67,0.83,0.67],
          delay:1
      }
    }
}
  return (
    <motion.div className='reuseable-tab relative'
    variants={variants}
    animate="show"
    initial="hidden">
        <motion.p className='pr-10'
        variants={FAQS}>{content} <span>
            <AiOutlinePlus color='rgba(144, 58, 255, 1)' fontSize={'1.2rem'} fontWeight={800} /></span>
        </motion.p>
        <div className='line'></div>
    </motion.div>
  )
}

export default ReuseableTab;