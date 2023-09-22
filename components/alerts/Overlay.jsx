"use client";
import Alerts from "./Alerts";
import { useState } from "react";


const Overlay = ({setPopUp, popUp,success}) => {

  return (
    <div className="absolute left-0 top-0">
        <div className='cover'>
         <Alerts setPopUp={setPopUp} popUp={popUp}/>
        </div>
    </div>
  )
}

export default Overlay