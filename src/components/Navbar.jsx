import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    return (
        <>
            <nav className="bg-black relative text-cyan-50 drop-shadow-lg pt-12 w-screen h-[80px] z-10">
                <div className="px-2 flex justify-between  items-center w-full h-full">
                    <div className="flex items-center pl-7">
                        <h1 className="font-bold text-4xl font-dodoo hidden md:flex mr-4">Manuel.Dev</h1>

                        <ul className="hidden mx-10 md:flex text-white">
                            <li className="text-white"><a className="hover:text-primary visited:text-white" href="#home">HOME</a></li>
                            <li className="text-white"><a className="hover:text-primary visited:text-white" href="#about">ABOUT</a></li>
                            <li className="text-white"><a className="hover:text-primary visited:text-white" href="#skills">SKILLS</a></li>
                            <li className="text-white"><a className="hover:text-primary visited:text-white" href="#projects">PROJECTS</a></li>
                            <li className="text-white"><a className="hover:text-primary visited:text-white" href="#contact">CONTACT</a></li>
                        </ul>
                    </div>

                    <div className="mx-10 hidden ml-10 md:flex pr-4">
                        <a href="https://github.com/Manuel2u" target="_blank" rel="noreferrer">
                            <button className="px-6 py-3 text-[16px] font-sans font-bold">Github Profile</button>
                        </a>
                    </div>

                    <div className="md:hidden pr-5">
                        <MenuIcon className="w-5" />
                    </div>
                </div>
            </nav>

            <div className="md:hidden fixed inset-y-0 z-50 shadow w-[60%]">
                <div className="md:hidden  bg-white text-left  h-screen  ">
                    <CloseIcon className="text-black absolute right-4 top-5 w-5 " />
                    <ul className="pt-16 pl-3">
                        <li className="text-black"><a className="hover:text-primary visited:text-black" href="#home">HOME</a></li>
                        <li className="text-white"><a className="hover:text-primary visited:text-black" href="#about">ABOUT</a></li>
                        <li className="text-white"><a className="hover:text-primary visited:text-black" href="#skills">SKILLS</a></li>
                        <li className="text-white"><a className="hover:text-primary visited:text-black" href="#projects">PROJECTS</a></li>
                        <li className="text-white"><a className="hover:text-primary visited:text-black" href="#contact">CONTACT</a></li>
                    </ul>
                </div>

            </div>
        </>
    );
}

export default Navbar
