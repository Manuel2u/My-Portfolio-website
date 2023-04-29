import React from "react";
import Image from "./Image";
import myImg from "../assets/mlsa-img.png";

function Intro() {
  return (
    <section
      id="home"
      className="bg-black pt-16 sm:pb-20 md:pb-[150px] md:flex md:items-center my-10 w-screen"
    >
      <Image
        link={myImg}
        alternative="myimg"
        height="400"
        width="400"
        className="md:mt-10 relative sm:top-[-65px] md:top-0 md:mx-40"
      />
      <div className="flex flex-col justify-around md:ml-2 md:px-0 relative sm:top-[-20px] md:mr-auto sm:ml-4 text-left">
        <h1 className="text-white sm:text-[32px] md:text-[54px]">
          EMMANUEL DODOO
        </h1>
        <h3 className="text-primary sm:text-[18px] sm:font-medium md:text-[25.6px] ">
          Software Engineer (Full Stack)
        </h3>
        <p className="text-white md:py-4 md:text-[16px] sm:text-[18px] sm:mt-6 md:mt-0 font-semibold md:w-[72%] sm:w-[90%] leading-7">
          I am a software engineer and problem solver, passionate about creating
          innovative solutions that help businesses thrive. With expertise in
          developing high-quality software applications, including responsive
          web apps, I am dedicated to exceeding my clients' expectations.
          Whether tackling complex challenges or taking on new projects, I am
          committed to delivering exceptional results and constantly expanding
          my knowledge and skills.
        </p>
        <div className="md:flex sm:mt-6 md:mt-0 pr-4">
          <a
            target="_blank"
            className="a"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1C18YogGxhLc1CUdsCMEdSHVaOzFOX39x/view?usp=sharing"
          >
            <button
              className="px-6 py-3 text-[16px] font-sans font-bold bg-black
                 text-primary border-primary hover:bg-primary  hover:text-black"
            >
              Check Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
