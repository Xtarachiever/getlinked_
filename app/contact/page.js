"use client";

import InputField from "@/components/InputField/InputField";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import TextArea from "@/components/InputField/TextArea";
import { useContactHook } from "@/components/hooks/contact-hook";
import Overlay from "@/components/alerts/Overlay";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    handleSubmit,
    success,
    email,
    first_name,
    phone_number,
    onSubmit,
    message,
    handleValueChange,
    errors,
    setSuccess
  } = useContactHook();

  const variants = {
    hidden: {opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.3
        }
    }
}

const texts = {
    hidden:{
        opacity:0,
        x:30,
    },
    show:{
        opacity:1,
        x:0,
        transition:{
            duration:2
        }
    }
}

  return (
    <div className={`contact-wrapper h-[100vh] ${success && 'hide'}`}>
      <Link href="/">
        <motion.img src="/leftArrow.svg" alt="back" className="absolute left-[10%] top-[120px]"
        animate={{x:0}}
        initial={{x:"-100vw"}}
        transition={{delay:1}}/>
      </Link>
      <div className="contact-card-div text-white">
        <motion.div className="contact-info"
        variants={variants}
        animate="show"
        initial="hidden">
          <div className="desktop-details">
            <motion.p className="text-2xl text-purpish-pink font-bold" variants={texts}>Get In Touch</motion.p>
            <motion.p variants={texts}>Contact Information</motion.p>
            <motion.p variants={texts}>
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </motion.p>
            <p>Call Us : 07067981819</p>
            <motion.p variants={texts}>
              we are open from Monday-Friday <br />
              08:00am - 05:00pm
            </motion.p>
          </div>
          <motion.div className="socials"
          animate={{x:0}}
          initial={{x:"100vw"}}
          transition={{stiffness:300, delay:0.5, type:"spring"}}>
            <span className="text-purpish-pink">Share on</span>
            <Link href={"/"}>
              <BsInstagram className="insta" />
            </Link>
            <Link href={"/"}>
              <FaXTwitter />
            </Link>
            <Link href={"/"}>
              <FaFacebookF />
            </Link>
            <Link href={"/"}>
              <FaLinkedinIn />
            </Link>
          </motion.div>
        </motion.div>
        <div className="contact-card">
          <div className="contact-card-wrapper w-full">
            <div className="text-purpish-pink text-xl font-semibold pb-4">
              <p>Questions or need assistance?</p>
              <p>Let us know about it!</p>
            </div>
            <p className="mobile-details">
              Email us below to any question related to our event
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="text-box">
                  <InputField
                    label={"First Name"}
                    name={"first_name"}
                    value={first_name}
                    onChange={(e) =>
                      handleValueChange("first_name", e.target.value)
                    }
                  />
                  <p className="text-[#FF26B9]">
                    {errors?.first_name?.message ?? undefined}
                  </p>
                </div>
                <div className="text-box">
                  <InputField
                    label={"Mail"}
                    name={"email"}
                    value={email}
                    onChange={(e) => handleValueChange("email", e.target.value)}
                  />
                  <p className="text-[#FF26B9]">
                    {errors?.email?.message ?? undefined}
                  </p>
                </div>
                <div className="text-box">
                  <InputField
                    label={"Phone Number"}
                    name={"phone_number"}
                    value={phone_number}
                    onChange={(e) =>
                      handleValueChange("phone_number", e.target.value)
                    }
                  />
                  <p className="text-[#FF26B9]">
                    {errors?.phone_number?.message ?? undefined}
                  </p>
                </div>
                <div className="text-box">
                  <TextArea
                    label={"Message"}
                    name={"message"}
                    value={message}
                    onChange={(e) =>
                      handleValueChange("message", e.target.value)
                    }
                  />
                  <p className="text-[#FF26B9]">
                    {errors?.message?.message ?? undefined}
                  </p>
                </div>
              </div>
              <div className="button">
                <button type="submit">Submit</button>
              </div>
            </form>
            {success ? <Overlay popUp={success} setPopUp={setSuccess} /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
