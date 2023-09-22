"use client";

import { useState } from "react";
import "./styles.css";

const InputField = ({ label, placeholder, value, onChange, name }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className={`input-box ${isActive ? 'active' : 'inActive'} w-full`}>
      <input
        placeholder={placeholder}
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        onFocus={()=>setActive(true)}
        onBlur={()=> setActive(false)}
        // className={`${active} && active`}
      />
      {label && <label className={`${(isActive || placeholder) ? 'active' : 'inActive'}`}>{label}</label>}
    </div>
  );
};

export default InputField;
