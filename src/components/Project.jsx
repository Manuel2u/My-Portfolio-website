import React from "react";
import Image from "./Image";
import todolist from "../assets/todolist.png";
import todolist1 from "../assets/todolist1.png";
import todolist2 from "../assets/todolist2.png";
import GoogleKeepclone from "../assets/GoogleKeepclone.jpg";
import Carousel from "./Carousel";
import snake1 from "../assets/snake1.png";
import snake2 from "../assets/snake2.png";
import snake3 from "../assets/snake3.png";

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
            <a href="https://github.com/Manuel2u/Google-Keep-CLone" target="_blank" rel="noreferrer">
                <button className="border-secondary border-2 px-6 py-3 text-[16px] font-sans font-bold">View Code</button>
            </a>
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
            <a href="https://github.com/Manuel2u/To-Do-List" rel="noreferrer" target="_blank">
                <button className="border-secondary border-2 px-6 py-3 text-[16px] font-sans font-bold">View Code</button>
            </a>
            </div>
            </div>
            <Carousel
            img1 = {todolist}
            img2 = {todolist1}
            img3 = {todolist2}
            alternative="Project 1"
            className="ml-8"
             />
           
        </div>

        <div className="md:flex pb-32">
        <Carousel
            img1 = {snake1}
            img2 = {snake2}
            img3 = {snake3}
            alternative="Project 1"
            className="ml-8"
             />
            <div className="md:block ml-5">
             <h3 className="text-deep text-left font-bold  text-3xl pb-5">Snake Game</h3>
             <p className="text-left text-secondary w-[70%]">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
             </p>
            
            <div className="md:flex my-5 pr-4">
            <a href="https://github.com/Manuel2u/Snake-Game" rel="noreferrer" target="_blank">
                <button className="border-secondary border-2 px-6 py-3 text-[16px] font-sans font-bold">View Code</button>
            </a>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Project;