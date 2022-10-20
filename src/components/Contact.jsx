import React from "react";
import Image from "./Image";

function Contact() {
    return (
        <div className="bg-white md:pb-56 sm:pb-32 pt-16">
            <div className="text-center text-black">
                <h1 className="font-bold  text-3xl pt-14">Contact<span className="text-primary">Me</span></h1>
                <p className="pt-7 pb-16 md:mx-0 sm:mx-auto md:w-[100%] sm:w-[70%] text-secondary">My contact details are given below you can also follow me</p>
            </div>
            <div className="md:flex justify-around  md:mx-24">

                <div className="md:flex flex-col text-center">
                    <Image
                        link="https://rishavchanda.github.io/images/phone.svg"
                        height="100px"
                        width="100px"
                        alternative="phone"
                        className="md:mx-auto sm:mx-auto"
                    />
                    <div className="md:block pt-14">
                        <h3 className="text-black text-center font-bold  text-[25px]">Call Me On</h3>
                        <p className="text-[13.8px] text-center">+233241489576</p>
                    </div>
                </div>

                <div className="md:flex flex-col justify-items-center text-center">
                    <a href="mailto:emmanueldodoo94@gmail.com" target="_blank" rel="noreferrer">
                        <Image
                            link="https://rishavchanda.github.io/images/gmail.svg"
                            height="100px"
                            width="100px"
                            alternative="gmail"
                            className="md:mx-auto sm:mt-16 md:mt-0 sm:mx-auto"
                        />
                    </a>
                    <div className="md:flex flex-col justify-center md:mr-0 sm:mr-0 pt-14 text-center">
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
                            className="md:mx-auto sm:mt-16 md:mt-0  sm:mx-auto"
                        />
                    </div>
                    <div className="md:block pt-14">
                        <h3 className="text-black text-center font-bold  text-[25px]">Visit Me..</h3>
                        <p className="text-[13.8px] text-center">Dome Pillar 2, Accra-Ghana</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;