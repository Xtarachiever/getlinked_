"use client";

import Link from 'next/link';
import './styles.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <motion.div className='nav'
    animate={{y:0}}
    initial={{y:"-50vh"}}
    transition={{delay:1}}>
      <div className="nav-wrapper flex items-center text-white py-6 px-[10px] sm:px-[60px]">
        <Link href={'/'}>
          <motion.img src="/getlinked.svg" alt="logo" whileHover={{scale:1.1}}/>
        </Link>
        <div className={`flex nav-content ${open && 'mobile'}`}>
            <div className="flex links">
                <Link href={'#timeline'} className={`${pathName === '/#timeline' ? 'active' : ''}`} onClick={()=>setOpen(false)}>Timeline</Link>
                <Link href={'/'} onClick={()=>setOpen(false)} className={`${pathName === '/' ? 'active' : ''}`}>Overview</Link>
                <Link href={'#faqs'} className={`${pathName === '/#faqs' ? 'active' : ''}`} onClick={()=>setOpen(false)}>FAQS</Link>
                <Link href={'/contact'} className={`${pathName === '/contact' ? 'active' : ''}`} onClick={()=>setOpen(false)}>Contact</Link>
            </div>
            <Link href={'/register'} onClick={()=>setOpen(false)}
            >
              <motion.button type='button'
              className={`${pathName === '/register' ? 'active' : ''}`}
              whileHover={{scale:1.1}}>Register</motion.button>
            </Link>
        </div>
        <div className='nav-hamburger' onClick={()=>setOpen(true)}>
          <motion.span animate={{x:0}} initial={{x:"-100vw"}} transition={{delay:0.5,stiffness:200}}></motion.span>
          <motion.span animate={{x:0}} initial={{x:"200px"}} transition={{delay:1,stiffness:250,duration:1}}></motion.span>
          <motion.span animate={{x:0}} initial={{x:"-100vw"}} transition={{delay:1.2,stiffness:200}}></motion.span>
        </div>
      </div>
      {
        open ? 
        <motion.div className='absolute top-[10px] close' onClick={()=>setOpen(false)}
        whileHover={{scale:0.7}}>
          <img src='/close.svg' alt='close' />
        </motion.div>
        : <></>
      }
        <div className='w-full'>
          <img src='Line.svg' alt='line' />
        </div>
    </motion.div>
  )
}

export default Nav;