"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Privacy = () => {
    const variants = {
        hidden: {opacity:0},
        show:{
            opacity:1,
            transition:{
                staggerChildren:0.3
            }
        }
    }

    const texts = {
        hidden:{
            opacity:0,
            x:30,
        },
        show:{
            opacity:1,
            x:0,
            transition:{
                duration:2
            }
        }
    }
  return (
    <div className='policy-wrapper relative'>
        <motion.div className='absolute top-[20%] right-[30%] z-[-1]'
            animate={{scale:1.1}}
            initial={{scale:0.3}}
            transition={{repeat:Infinity,duration:2}}>
            <Image src="/gray-star.svg" alt="star" width={30} height={30}/>
        </motion.div>
        <motion.div className='absolute bottom-[40px] right-[50%] z-[-1]'
            animate={{opacity:1}}
            initial={{opacity:0.4}}
            transition={{repeat:Infinity,duration:2}}>
            <Image src="/star.svg" alt="star" width={20} height={20}/>
        </motion.div>
        <div className='policies'>
            <div>
                <p className='text-4xl font-bold'>Privacy Policy and <br /><span className="text-purpish-pink">Terms</span></p>
                <p className='py-4 text-gray1'>Last updated on September 12, 2023</p>
                <p className='py-8'>Below are our privacy & policy, which outline a lot of goodies. <br />it&#39;s our aim to always take of our participant</p>
            </div>
            <motion.div className='policy'
            variants={variants}
            initial="hidden"
            animate="show">
                <motion.p variants={texts}
                initial="hidden"
                animate="show">At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.
                </motion.p>
                <p className='text-purple pt-8'>Licensing Policy</p>
                <p>Here are terms of our Standard License:</p>
                <ol className='license'>
                    <motion.li
                    variants={texts}
                    initial="hidden"
                    animate="show"><span></span>The Standard License grants you a non-exclusive right to navigate and register for our event</motion.li>
                    <motion.li
                    variants={texts}
                    initial="hidden"
                    animate="show"><span></span>You are licensed to use the item available at any free source sites, for your project developement</motion.li>
                </ol>
                <motion.div className='button'
                initial={{x:"-100vw"}}
                animate={{x:0}}
                transition={{delay:6,stiffness:300}}>
                    <button type='button'>Read More</button>
                </motion.div>
            </motion.div>
            <motion.div className='absolute bottom-[80px] left-[50px] z-[-1]'
                        animate={{opacity:1}}
                        initial={{opacity:0.6}}
                        transition={{repeat:Infinity,duration:2}}>
                <Image src="/purple-star.svg" alt="star" width={20} height={20}/>
            </motion.div>
            <div className='absolute top-[80px] right-[50px] z-[-1]'>
                <Image src="/star.svg" alt="star" width={20} height={20}/>
            </div>
        </div>
        <div className='images relative w-full min-w-[400px]'>
            <img src='/privacy.svg' className='absolute right-[100px] -top-[120px]'/>
            <img src='privacy-terms.svg' alt='privacy-terms' className='privacy-img'/>
        </div>
    </div>
  )
}

export default Privacy