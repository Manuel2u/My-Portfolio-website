import React from "react";
import Image from "./Image";

function Education(){
    return(
        <div className="bg-darkBlue pb-24">
        <div className="text-center py-16">
        <h3 className="text-white font-bold pb-4 text-3xl">My<span className="text-primary"> Education</span></h3>
        <p className="text-white">About my education and qualification that I have</p>
        </div>
        <div className="md:flex px-16 mt-6">
        <Image
        height="500px"
        width="500px"
        link="https://rishavchanda.github.io/images/book.gif"
        className="bg-white"        
         />
         <div className="pl-10 my-14 mx-5 w-[50%]">
         <h3 className="text-primary text-2xl font-bold pb-4">School</h3>
         <h3 className="text-deep font-medium ">High School</h3>
         <p className="text-darktxt pb-3">
          I attended High School at Odorgonno Senior High School in the year 2018 and 
         completed my Senior High School Certificate Examination in the year 2021.
         .I studied General Science in my Senior High School. Member of the Robotics Club.
         I was the Class Prefect of my class in the year 2020 till completion.
         </p>
         <h3 className="text-deep  font-medium">Tertiary Education</h3>
         <p className="text-darktxt">Currently I am a First Year student of the University of Ghana Legon studying  Physics and Computer Science.
         .I am a member of the Huawei ICT Academy Club. I was a Course Rep for Academic Writing 1, showed True Leadership Skills.
         </p>
         </div>
        </div>
        </div>
    );
}

export default Education;