import React from "react";
import discordSVG from "../assets/discord.svg";
import linkdlnSVG from "../assets/linkdln.svg";

function Social() {
    return (
        <div className="bg-projects pb-[85px]">
            <div className="text-center text-white">
                <h1 className="font-bold  text-3xl pt-14">Follow<span className="text-primary"> Me</span></h1>
            </div>
            <div className="md:flex sm:flex sm:justify-around md:justify-center  py-16  mt-5">
                <div className="md:px-5 sm:px-3">
                    <a target="_blank" rel="noreferrer" href="https://github.com/Manuel2u">
                        <img height="50px" width="50px" alt="github" src="https://rishavchanda.github.io/images/github.svg"></img>
                    </a>
                </div>
                <div className="md:px-5 sm:px-3">
                    <a target="_blank" rel="noreferrer" href="https://web.facebook.com/emmanuel.oforiboakye.9/">
                        <img height="50px" width="50px" alt="facebook" src="https://rishavchanda.github.io/images/facebook.svg"></img>
                    </a>
                </div>
                <div className="md:px-5 sm:px-3">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/manuel___dev">
                        <img height="50px" width="50px" alt="twitter" src="https://rishavchanda.github.io/images/twitter.svg"></img>
                    </a>
                </div>
                <div className="md:px-5 sm:px-3">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/manuel__dev/">
                        <img height="50px" width="50px" alt="IG" src="https://rishavchanda.github.io/images/instagram.svg"></img>
                    </a>
                </div>
                <div className="md:px-5 sm:px-3">
                    <a target="_blank" rel="noreferrer" href="https://discord.com/users/921870931385798686">
                        <img height="50px" width="50px" alt="discord" src={discordSVG}></img>
                    </a>
                </div>
                <div className="md:px-5 sm:px-3">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/emmanuel-dodoo-a22a4a239/">
                        <img height="50px" width="50px" alt="discord" src={linkdlnSVG}></img>
                    </a>
                </div>

            </div>
            <div>
                <p className="text-secondary text-center text-[18px]">© 2022</p>
            </div>
        </div>
    );
}


export default Social