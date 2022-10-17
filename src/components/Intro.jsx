import React from "react";
import Image from "./Image";
import myImg from "../assets/myPhoto.jpg";

function Intro(){
    return(
        <section id="home" className="bg-black pt-16 pb-[150px] md:flex my-10 w-screen">
        <Image
        link={myImg}
        alternative="myimg"
        height="400"
        width="400"
        className="mt-10 mx-40"
         />
         <div className="flex flex-col justify-around ml-2 px-0 mr-auto text-left">
         <h1 className="text-white text-[54px]">EMMANUEL DODOO</h1>
         <h3 className="text-primary text-[25.6px] ">FULL STACK WEB DEVELOPER</h3>
         <p className="text-white py-4 text-[16px] font-semibold w-[72%] leading-7">
         I am a passionate Full Stack Web Developer . 
         I love coding and developing new things . 
         I build Responsive Web apps and help people to reach out their goals through my apps. 
         Also I push myself by learning new things and taking up challenges.
         </p>
         <div className="md:flex pr-4">
         <a target="_blank" className="a" rel="noreferrer" href="https://drive.google.com/file/d/1C18YogGxhLc1CUdsCMEdSHVaOzFOX39x/view?usp=sharing">
                <button className="px-6 py-3 text-[16px] font-sans font-bold bg-black
                 text-primary border-primary hover:bg-primary  hover:text-black">Check Resume</button>
         </a>
            </div>
         </div>
        </section>
    );
}

export default Intro;