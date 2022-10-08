import React from "react";
import Image from "./Image";


function About(){
    return (
        <div id="curve">
        <aside id="about" className="md:flex justify-around pb-16">
        <Image
        height="600px"
        width="500px"
        className="mt-10 mx-20 pl-16"
        link="https://rishavchanda.github.io/images/programmer.gif"
         />
         <div className="text-left pr-10 py-16 px-5">
        <h4 className="font-bold text-[32px]">About<span className="text-primary text-[32px] font-bold">Me</span></h4>
        <h3 className="py-4 text-[25.6px]">Hello! I'm Emmanuel</h3>
        <p className="text-secondary  w-[87%] leading-7">
        Hi, Everyone I am First Year student currently I am studying in the University of Ghana . 
        I am a passionate Full Web Developer . 
        I am always ready to have new experiences and learn new technologies and implement them in my life. 
        I learn new things and help people by creating impact through my developing skills and by solving their problem. 
        I love coding and specially Web and Mobile app development.
        </p>
        
        <div className="md:flex py-2  mt-5">
            <a target="_blank" rel="noreferrer" href="https://github.com/Manuel2u">
                <img alt="github" src="https://rishavchanda.github.io/images/github.svg"></img>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Manuel2u">
                <img alt="facebook" src="https://rishavchanda.github.io/images/facebook.svg"></img>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Manuel2u">
                <img alt="twitter" src="https://rishavchanda.github.io/images/twitter.svg"></img>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Manuel2u">
                <img alt="IG" src="https://rishavchanda.github.io/images/instagram.svg"></img>
            </a>
            
        </div>
        </div>
        </aside>
        </div>
    );
}

export default About;