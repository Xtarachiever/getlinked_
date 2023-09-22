"use client";

import { useState } from "react";
import "./styles.css";

const TextArea = ({ label, placeholder, value, onChange, name }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className={`input-box ${isActive ? 'active' : 'inActive'}`}>
      <textarea
        placeholder={placeholder}
        rows={4}
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        onFocus={()=>setActive(true)}
        onBlur={()=> setActive(false)}
        // className={`${active} && active`}
        ></textarea>
      {label && <label className={`${isActive ? 'active' : 'inActive'}`}>{label}</label>}
    </div>
  );
};

export default TextArea;
