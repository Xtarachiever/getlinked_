"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidator } from "./validators";
import { useMemo, useState } from "react";

export const useRegisterHook = () =>{
    const baseUrl = 'https://backend.getlinked.ai';
    const [success, setSuccess] = useState(false);
    const {
        handleSubmit,
        formState,
        reset,
        setValue,
        watch,
    } = useForm({
        resolver: yupResolver(RegisterValidator),
        mode: 'all',
        defaultValues: {
            team_name: '',
            phone_number: '',
            category:'',
            email:'',
            project_topic:'',
            privacy_policy_accepted:'false',
            group_size:''
        },
    });

    const handleValueChange = (field, value) => {
        setValue(field, value)
    }

    const isSubmitting = useMemo(() => {
        return formState.isSubmitting;
    }, [formState]);

    const { email, privacy_policy_accepted, phone_number,team_name,category, project_topic,group_size } = watch();

    const postApplication = async (details) =>{
        const postRequest = await fetch(`${baseUrl}/hackathon/registration`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({...details})
        })
        const response = postRequest.json().then((data)=>{
            return data
          })
        if(postRequest.ok){
            setSuccess(true)
        }else if(!postRequest.ok && postRequest?.status === 400){
            alert('Applicant with this Email already exists')
        }
        else{
            alert("Something went wrong")
        }
        // console.log(postRequest.statusText)
    }
    const onSubmit = async (data) => {
        postApplication(data);
        if(success){
            reset();
        }
    }

    return {
        privacy_policy_accepted,
        phone_number,
        team_name,
        category,
        project_topic,
        group_size,
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