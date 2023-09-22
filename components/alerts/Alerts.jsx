import Image from "next/image";
import Link from "next/link";
import './styles.css';


const Alerts = ({setPopUp}) => {
    // popUp and change location pathname
  return (
    <div className='alert-wrapper'>
        <div className="max-w-[600px] alert-content">
            <div>
                <Image src="/congratulation.svg" alt="Congrats" width={250} height={250}/>
                <p className="text-md md:text-xl">Congratulations you have successfully <br />Registered!</p>
                <p className="text-sm md:text-lg">Yes, it was easy and you did it! check your mail box for next step</p>
            </div>
            <button type="button" onClick={()=>setPopUp(false)}>Back</button>
        </div>
    </div>
  )
}

export default Alerts;