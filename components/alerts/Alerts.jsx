"use client";

import { motion } from "framer-motion";
import './styles.css';
import { usePathname,useRouter } from "next/navigation";


const Alerts = ({setPopUp}) => {
    // popUp and change location pathname
    const router = useRouter();

    const handleClick = () =>{
      setPopUp(false);
      router.replace('/');
    }
  return (
    <div className='alert-wrapper'>
        <div className=" alert-content">
            <div>
                <motion.img src="/congratulation.svg" alt="Congrats" width={250} height={250} 
                  animate={{y:0}}
                  initial={{y:-40}}
                  transition={{ duration: 1, ease:"easeOut",delay:1 }}/>
                <motion.p className="text-md md:text-xl"
                animate={{scale:1}}
                initial={{scale:0}}
                transition={{delay:1}}>Congratulations you have successfully <br />Registered!</motion.p>
                <p className="text-sm md:text-lg">Yes, it was easy and you did it! check your mail box for next step</p>
            </div>
            <motion.button type="button" onClick={handleClick}
            whileHover={{scale:1.1}}>Back</motion.button>
        </div>
    </div>
  )
}

export default Alerts;