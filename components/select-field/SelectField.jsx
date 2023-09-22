"use client";

import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import './styles.css';
import { useEffect, useState } from 'react';

const SelectField = ({defaultValue,option1,label,onChange, value}) => {
  const [categories, setCategories] = useState([]);
  const baseUrl = 'https://backend.getlinked.ai'
  const getCategories = async () =>{
    try{
      const fetchCategories = await fetch(`${baseUrl}/hackathon/categories-list`,{
        method:'GET',
        headers:{
          "content-type":"application/json"
        }
      });
      const response = fetchCategories.json().then((data)=>{
        setCategories(data)
      })
      return response;
    }catch(e){
      console.log(e)
    }
  }

  // console.log(categories.map(({name})=>console.log(name)))

  useEffect(()=>{
    getCategories()
  },[])


  return (
    <div className='select-box w-full'>
        <label>{label}</label>
        <div className='relative pt-2'>
            <select onChange={onChange} value={value}>
              <option value=''>{defaultValue}</option>
                {
                  categories && categories.map(({id,name})=>(
                    <option key={id} value={id}>{name}</option>
                  ))
                }
            </select>
            <RiArrowDownSLine fontSize={'1.5rem'} className='absolute right-2 top-[20px] pointer-events-none'/>
        </div>
    </div>
  )
}

export default SelectField