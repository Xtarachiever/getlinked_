"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactValidator } from "./validators";
import { useMemo,useState } from "react";

export const useContactHook = () =>{
    const baseUrl = "https://backend.getlinked.ai";
    const [success, setSuccess] = useState(false);
    const {
        handleSubmit,
        reset,
        formState,
        setValue,
        watch,
    } = useForm({
        resolver: yupResolver(ContactValidator),
        mode: 'all',
        defaultValues: {
            first_name: '',
            phone_number: '',
            message:'',
            email:''
        },
    });

    const handleValueChange = (field, value) => {
        setValue(field, value)
    }

    const postMessage = async (details) =>{
        const sendMessage = await fetch(`${baseUrl}/hackathon/contact-form`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({...details})
        })
        const response = sendMessage.json().then((data)=>{
            return data
        })
        if(sendMessage.ok){
            setSuccess(true);
        }else if(!sendMessage.ok && sendMessage?.statusText !== ''){
            alert(sendMessage.statusText)
        }
        else{
            alert("Something went wrong")
        }
        console.log(sendMessage.status)
    }

    const isSubmitting = useMemo(() => {
        return formState.isSubmitting;
    }, [formState]);

    const { email, first_name, phone_number,message } = watch();

    const onSubmit = async (data) => {
        postMessage(data);
        reset();
    }

    return {
        first_name,
        phone_number,
        message,
        email,
        handleValueChange,
        isSubmitting,
        errors: formState.errors,
        handleSubmit,
        onSubmit,
        success,
        setSuccess
    }
}