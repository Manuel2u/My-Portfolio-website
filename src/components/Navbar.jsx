import React from "react";

function Navbar(){
    return (
        <nav className="bg-black text-cyan-50 drop-shadow-lg pt-12 w-screen h-[80px]">
        <div className="px-2 flex justify-between  items-center w-full h-full">
            <div className="flex items-center">
            <h1 className="font-bold text-4xl font-dodoo mr-4">Manuel.Dev</h1>
            
            <ul className="hidden mx-10 md:flex">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SKILLS</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul>
            </div>
            <div className="mx-10 hidden md:flex pr-4">
                <button className="px-6 py-3 text-[16px] font-sans font-bold">Github Profile</button>
            </div>
            </div>
        </nav>
    );
}

export default Navbar
