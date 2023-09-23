"use client";

import InputField from "@/components/InputField/InputField";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import TextArea from "@/components/InputField/TextArea";
import { useContactHook } from "@/components/hooks/contact-hook";
import Overlay from "@/components/alerts/Overlay";

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

  return (
    <div className="contact-wrapper relative h-[100vh]">
      <div className="contact-card-div text-white">
        <div className="contact-info">
          <div className="desktop-details">
            <p className="text-2xl text-purpish-pink font-bold">Get In Touch</p>
            <p>Contact Information</p>
            <p>
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </p>
            <p>Call Us : 07067981819</p>
            <p>
              we are open from Monday-Friday <br />
              08:00am - 05:00pm
            </p>
          </div>
          <div className="socials">
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
          </div>
        </div>
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
