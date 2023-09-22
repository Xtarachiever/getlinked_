"use client";
import Footer from '@/components/layout/Footer';
import './globals.css';
import Nav from '@/components/layout/Nav';
import { usePathname } from 'next/navigation';
import Overlay from '@/components/alerts/Overlay';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const excludedPaths = ['/contact', '/register'];

  const [popUp, setPopUp] = useState(false)
  return (
    <html lang="en">
      <head>
        <title>GetLinkedHackathon</title>
        <meta name='GetLinkedHackathon' content='Hackathon' />
      </head>
      <body className={`bg-darkBlue font-montserrat relative ${popUp ? 'overflow-hidden' : ''}`}>
          {
            popUp &&
            <div className='absolute left-0 top-0'>
              <Overlay setPopUp={setPopUp}/>
            </div>
          }
        <div className='max-w-[1600px] m-[auto] overflow-hidden'>
          <Nav />
          <AnimatePresence>
            <motion.div className='px-[60px]'
            initial={{opacity:0, y:15}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:15}}
            transition={{delay:0.25}}
            >
            <div>
              {children}
            </div>
          </motion.div>
          </AnimatePresence>
          {
            excludedPaths.includes(pathname) ? <></> : <Footer />
          }
        </div>
      </body>
    </html>
  )
}
