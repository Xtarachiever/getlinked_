"use client";

import InputField from "@/components/InputField/InputField";
import SelectField from "@/components/select-field/SelectField";
import { useRegisterHook } from "@/components/hooks/register-hook";
import Overlay from "@/components/alerts/Overlay";
import { motion } from "framer-motion";

const Register = () => {
  const {
    handleSubmit,
    onSubmit,
    errors,
    success,
    phone_number,
    project_topic,
    email,
    group_size,
    category,
    team_name,
    handleValueChange,
    setSuccess
  } = useRegisterHook();
  return (
    <div className={`text-white register-wrapper ${success && 'hidden'}`}>
      <p className="text-purpish-pink font-bold text-2xl pb-6 mobile-text">
        Register
      </p>
      <motion.div className="section1"
      initial={{y:"-100vh"}}
      animate={{y:0}}
      transition={{delay:1}}>
        <img src="/registration.svg" alt="register" />
      </motion.div>
      <div className="section2 register-card">
        <div>
          <p className="text-purpish-pink font-bold text-2xl pb-6 desktop">
            Register
          </p>
          <p className="stylish">
            Be part of this movement!
            <span className="dots relative">
              <img
                src="/movement.svg"
                alt="Movement"
                className="absolute -top-[14px] left-[10px]"
              />
            </span>
          </p>
          <p className="text-2xl pb-4 pt-2">CREATE YOUR ACCOUNT</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div className="input-fields">
                <div >
                    <InputField
                        placeholder={"Enter the name of your group"}
                        label={"Team's Name"}
                        value={team_name}
                        onChange={(e)=>handleValueChange('team_name', e.target.value)}
                    />
                    <p className="text-[#FF26B9]">{errors?.team_name?.message ?? undefined}</p>
                </div>
                <div>
                        <InputField
                        placeholder={"Enter your phone number"}
                        label={"Phone"}
                        value={phone_number}
                        onChange={(e)=>handleValueChange('phone_number', e.target.value)}
                    />
                    <p className="text-[#FF26B9]">{errors?.phone_number?.message ?? undefined}</p>
                </div>
            </div>
            <div className="input-fields">
                <div>
                    <InputField
                    placeholder={"Enter your email address"}
                    label={"Email"}
                    value={email}
                    onChange={(e)=>handleValueChange('email', e.target.value)}
                    />
                    <p className="text-[#FF26B9]">{errors?.email?.message ?? undefined}</p>
                </div>
                <div>
                    <InputField
                        placeholder={"What's your group project topic?"}
                        label={"Project Topic"}
                        value={project_topic}
                        onChange={(e)=>handleValueChange('project_topic', e.target.value)}
                    />
                    <p className="text-[#FF26B9]">{errors?.project_topic?.message ?? undefined}</p>
                </div>
            </div>
            <div className="input-fields">
                <div>
                    <SelectField
                    defaultValue={"Select your category"}
                    option1={"Hello"}
                    label={"Category"}
                    value={category}
                    onChange={(e)=>handleValueChange('category', e.target.value)}
                    />
                    <p className="text-[#FF26B9]">{errors?.category?.message ?? undefined}</p>
                </div>
                <div className="group-size">
                    <InputField  label={'Group Size'} 
                    value={group_size}
                    placeholder={'Group Size'}
                    onChange={(e)=>handleValueChange('group_size', e.target.value)}/>
                    <p className="text-[#FF26B9]">{errors?.group_size?.message ?? undefined}</p>
                </div>
            </div>
          </div>
          <p className="text-purpish-pink">
            Please review your registration details before submitting
          </p>
          <div className="checkbox flex items-center py-5">
            <input type="checkbox" name="check" id="check"
            onChange={(e)=> handleValueChange('privacy_policy_accepted', e.target.checked)}/>
            <p className="text-[#FF26B9]">{errors?.privacy_policy_accepted?.message ?? undefined}</p>
            <span className="pl-2 cursor-pointer check-div" >
              <label htmlFor="check"> I agreed with the event terms and conditions and privacy policy </label>
            </span>
          </div>
          <button className="w-full" type="submit">
            Register Now
          </button>
        </form>
        {
          success ? 
          <Overlay popUp={success} setPopUp={setSuccess}/>
          : <></>
        }
      </div>
    </div>
  );
};

export default Register;
