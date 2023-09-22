"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const PartnerSponsor = () => {
  return (
    <div className='text-center pt-14 relative'>
        <p className="text-3xl py-4">Partners and Sponsors</p>
        <p>Getlinked Hackathon 1.0 is honored to have the following major <br />companies as its partners and sponsors</p>
        <div className='py-10'>
            <img src="/Partners.svg" alt='sponsors and partners' className=' m-[auto]'/>
        </div>
        <motion.div className='absolute top-[80px] right-[50px] z-[-1]'
            animate={{scale:1.1}}
            initial={{scale:0.3}}
            transition={{repeat:Infinity,duration:2}}>
            <Image src="/star.svg" alt="star" width={20} height={20}/>
        </motion.div>
        <div className='absolute bottom-[80px] left-[50px] z-[-1]'>
            <Image src="/purple-star.svg" alt="star" width={20} height={20}/>
        </div>
        <div className='absolute bottom-[50%] right-[50px] z-[-1]'>
            <Image src="/gray-star.svg" alt="star" width={20} height={20}/>
        </div>
        <motion.div className='absolute top-[40%] right-[50%] z-[-1]'
                    animate={{opacity:1}}
                    initial={{opacity:0.3}}
                    transition={{repeat:Infinity,duration:2}}>
            <Image src="/star.svg" alt="star" width={20} height={20}/>
        </motion.div>
    </div>
  )
}

export default PartnerSponsor;