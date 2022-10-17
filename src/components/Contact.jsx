import React from "react";
import Image from "./Image";

function Contact() {
    return (
        <div className="bg-white pb-56 pt-16">
        <div className="text-center text-black">
            <h1 className="font-bold  text-3xl pt-14">Contact<span className="text-primary">Me</span></h1>
            <p className="pt-7 pb-16 text-secondary">My contact details are given below you can also follow me</p>
        </div>
        <div className="md:flex justify-around pb mx-24">

        <div className="md:flex flex-col text-center">
        <Image
        link="https://rishavchanda.github.io/images/phone.svg"
        height="100px"
        width="100px"
        alternative="phone"
        className=""
         />
         <div className="md:block pt-14">
            <h3 className="text-black text-center font-bold  text-[25px]">Call Me On</h3>
            <p className="text-[13.8px] text-center">+233241489576</p>
         </div>
         </div>

         <div className="md:flex flex-col justify-items-center text-center">
        <Image
        link="https://rishavchanda.github.io/images/gmail.svg"
        height="100px"
        width="100px"
        alternative="gmail"
        className="ml-10"
         />
         <div className="md:flex flex-col justify-center mr-10 pt-14 text-center">
            <h3 className="text-black text-center font-bold  text-[25px]">Email Me At</h3>
            <p className="text-[13.8px] text-center">emmanueldodoo94@gmail.com</p>
         </div>
         </div>

         <div className="md:flex flex-col text-center">
         <div className="">
        <Image
        link="https://rishavchanda.github.io/images/office.svg"
        height="100px"
        width="100px"
        alternative="office"
        className="ml-8"
         />
         </div>
         <div className="md:block pt-14">
            <h3 className="text-black text-center font-bold  text-[25px]">Visit Me At</h3>
            <p className="text-[13.8px] text-center">Dome Pillar 2, Accra-Ghana</p>
         </div>
         </div>
        </div>
        </div>
    );
    }


export default Contact;