"use client";

import Link from 'next/link';
import './styles.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Nav = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className='nav'>
      <div className="nav-wrapper flex items-center text-white py-6 px-[10px] sm:px-[60px]">
        <Link href={'/'}>
          <img src="/getlinked.svg" alt="logo"/>
        </Link>
        <div className={`flex nav-content ${open && 'mobile'}`}>
            <div className="flex links">
                <Link href={'/'}>Timeline</Link>
                <Link href={'/'}>Overview</Link>
                <Link href={'/'}>FAQS</Link>
                <Link href={'/contact'} className={`${pathName === '/contact' ? 'active' : ''}`}>Contact</Link>
            </div>
            <Link href={'/register'}>
              <button type='button'>Register</button>
            </Link>
        </div>
        <div className='nav-hamburger' onClick={()=>setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {
        open ? 
        <div className='absolute top-[10px] close' onClick={()=>setOpen(false)}>
          <img src='/close.svg' alt='close' />
        </div>
        : <></>
      }
        <div className='w-full'>
          <img src='Line.svg' alt='line' />
        </div>
    </div>
  )
}

export default Nav;