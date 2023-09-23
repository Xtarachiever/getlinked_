"use client";
import './styles.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MainSection = () => {
  return (
    <div className="mb-16">
      <div className='relative main-section'>
        <motion.div className='idea absolute top-[60px] left-[450px]'
            animate={{scale:1.1,opacity:1}}
            initial={{scale:0.8,opacity:0.5}}
            transition={{duration:2}}>
          <img src='/Bulb.svg' alt='idea'/>
        </motion.div>
        <div className='relative pb-5 ignite-text'>
              <div className='absolute top-[40px] left-[10px] z-[-1]'>
                <Image src="/star.svg" alt="star" width={30} height={30}/>
              </div>
            <p className='italic text-2xl font-bold z-[2]'>
              Igniting a Revolution in HR Innovation
            </p>
            <img src='/curved-line.svg' alt='line' className='curved-line'/>
        </div>
           <section className='mt-8'>
              <motion.div className='absolute top-[80px] left-[70%] z-[-1]'
                  animate={{scale:1.1}}
                  initial={{scale:0.5}}
                  transition={{repeat:Infinity,duration:2}}>
                <Image src="/gray-star.svg" alt="star" width={20} height={20}/>
              </motion.div>
              <div className='absolute bottom-[80px] left-[50%] z-[-1]'>
                <Image src="/gray-star.svg" alt="star" width={20} height={20}/>
              </div>
              <div className='text-section py-6 w-[52%] lg:w-[75%]'>
                <div className='relative w-full'>
                  <div className='main-details'>
                      <div className='main-header text-4xl sm:text-5xl md:text-[68px] font-extrabold sm:leading-snug tracking-wide relative lg:w-[680px]'>
                        getlinkedTech <br />Hackathon <span className='text-pink'>1.0</span>
                        <img src='/link.svg' alt='connect' className='inline'/>
                        <motion.img src='/flash.svg' alt='flash' className='inline'
                            animate={{scale:1.1}}
                            initial={{scale:0.5}}
                            transition={{repeat:Infinity,duration:2}}/>
                      </div>
                      <motion.p className='text-2xl lg:max-w-[550px] py-6'
                      initial={{y:"50vh"}}
                      animate={{y:-10}}
                      transition={{delay:1, stiffness:120,type:'spring'}}
                      >
                        Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</motion.p>
                      <Link href="/"><motion.button type='button'
                      initial={{x:"-100vw"}}
                      animate={{x:0}}
                      transition={{delay:2,type:'spring',stiffness:150}}>Register</motion.button></Link>
                      <div className='py-14'>
                        <p className='text-4xl sm:text-6xl'>00<sub className='subscript'>H</sub>00<sub className='subscript'>M</sub>00<sub className='subscript'>s</sub></p>
                      </div>
                  </div>
                </div>
              </div>
                <motion.img src='/Virtual_image.svg' alt='virtual' className='section2 virtual-image absolute -bottom-2 -right-[25px] max-w-[750px] z-[-1]'
                animate={{y:0}}
                initial={{y:"50vh"}}
                transition={{delay:1, stiffness:50, type:"spring"}}/>
                {/* <img src='/globe.svg' alt='globe' className='absolute top-[50px] right-[60px] w-[600px]'/> */}
           </section>
           <div className='line-pattern absolute -bottom-2'>
              <img src='Line.svg' alt='line' />
            </div>
        </div>
    </div>
  )
}

export default MainSection;