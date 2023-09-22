"use client";
import { motion } from 'framer-motion';
import './styles.css';

const ReuseablePrizeCard = ({src,position,prize,bgColor,width,top,winner}) => {
  return (
    <motion.div className={`relative each-prize`}
    whileHover={{scale:1.1}}>
        <div className={`pt-12 px-4 p-3 font-800 reuseable-prize-card-wrapper ${bgColor ? bgColor : `bg-[rgba(212, 52, 254, 0.12)]`} ${winner && 'winner'}`}>
            <img src={src} alt='awards' className={`awards-img ${width ? width : 'w-full'} ${top ? top : '-top-[50px]'}`}/>
            <div className='text-center'>
                <p className='font-bold'>{position}<br />Runner</p>
                <p className={`pt-4 ${winner ? 'text-purple' : 'text-purpish-pink'} font-bold`}>{prize}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default ReuseablePrizeCard