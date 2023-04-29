import React from "react";
import Image from "./Image";


function Card(props){
    return(
        <div className="bg-white mx-7 relative hover:text-white hover:bg-black w-[383px] h-[256.19px]  p-6 my-10">
        <div className="flex justify-center relative">
        <Image
        height="80px"
        width="80px"
        link={props.link}
        className="mb-26 absolute top-[-72px]"        
         />
        </div>
        <div className="flex flex-col relative top-10 items-center">
         <h3 className="text-2xl font-medium pb-4">{props.title}</h3>
         <p className="text-darktxt text-center  w-[750]">{props.description}</p>
        </div>
        </div>
    );
}

export default Card;