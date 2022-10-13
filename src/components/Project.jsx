import React from "react";
import Image from "./Image";
import GoogleKeepclone from "../assets/GoogleKeepclone.jpg";
// import todolist from "../assets/todolist.png";
import Carousel from "./Carousel";

function Project(){
    return(
        <div className="bg-projects pb-32">
        <div className="text-center text-white">
            <h1 className="font-bold  text-3xl pt-14"><span className="text-primary">My</span> Projects</h1>
            <p className="pt-7 pb-16">Some of my projects in which I had worked and developed are shown below</p>
        </div>
        <div>
        <div className="md:flex pb-32">
            <Image
            link={GoogleKeepclone}
            height="500px"
            width="500px"
            alternative="Project 1"
            className="mx-16 mr-5"
             />
            <div className="md:block ml-5">
             <h3 className="text-deep text-left font-bold  text-3xl pb-5">Google Keep Clone</h3>
             <p className="text-left text-secondary w-[70%]">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
             </p>
            
            <div className="md:flex my-5 pr-4">
                <button className="border-secondary border-2 px-6 py-3 text-[16px] font-sans font-bold">View Code</button>
            </div>
            </div>
        </div>
        

        <div className="md:flex mx-24 pb-32">
        <div className="md:block mr-16">
             <h3 className="text-deep text-left font-bold  text-3xl pb-5">Todo Web App</h3>
             <p className="text-left text-secondary w-[100%]">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
             </p>
            
            <div className="md:flex my-5 pr-4">
                <button className="border-secondary border-2 px-6 py-3 text-[16px] font-sans font-bold">View Code</button>
            </div>
            </div>
            <Carousel
            alternative="Project 1"
            className="ml-8"
             />
           
        </div>

        <div className="md:flex pb-32">
            <Image
            link={GoogleKeepclone}
            height="500px"
            width="500px"
            alternative="Project 1"
            className="mx-16 mr-5"
             />
            <div className="md:block ml-5">
             <h3 className="text-deep text-left font-bold  text-3xl pb-5">Google Keep Clone</h3>
             <p className="text-left text-secondary w-[70%]">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
             </p>
            
            <div className="md:flex my-5 pr-4">
                <button className="border-secondary border-2 px-6 py-3 text-[16px] font-sans font-bold">View Code</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Project;