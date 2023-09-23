"use client";
import Alerts from "./Alerts";
import './styles.css';


const Overlay = ({popUp, setPopUp}) => {

  return (
    <div>
      {
        popUp ?
        <div className="absolute left-0 top-0">
            <div className='cover'>
            <Alerts setPopUp={setPopUp} popUp={popUp}/>
            </div>
        </div> : <></>
      }
    </div>
  )
}

export default Overlay