import React from "react";
import Image from "./Image";

function About() {
  return (
    <div id="curve">
      <aside id="about" className="md:flex justify-around sm:pb-5 md:pb-16">
        <Image
          height="600px"
          width="500px"
          className="md:mt-10 md:mx-20 md:pl-16 sm:mx-auto"
          link="https://rishavchanda.github.io/images/programmer.gif"
        />
        <div className="md:text-left sm:text-center md:pr-10 py-16 md:px-5 sm:px-5">
          <h4 className="font-bold text-[32px]">
            About<span className="text-primary text-[32px] font-bold">Me</span>
          </h4>
          <h3 className="py-4 text-[25.6px]">Hello! I'm Emmanuel</h3>
          <p className="text-secondary  sm:w-[95%] md:w-[87%] leading-7">
            Hi! I am a student currently studying at the University of Ghana,
            and I am expected to graduate in 2025. Over the past few years, I
            have developed a strong foundation in data structures and
            algorithms, as well as expertise in web and mobile development. I am
            passionate about coding and creating impact through my work. I am
            always excited to learn new technologies and apply them to
            real-world problems.
          </p>

          <div className="md:flex sm:flex sm:justify-center md:justify-start py-2  mt-5">
            <a
              target="_blank"
              className="a"
              rel="noreferrer"
              href="https://github.com/Manuel2u"
            >
              <img
                className="img"
                alt="github"
                src="https://rishavchanda.github.io/images/github.svg"
              ></img>
            </a>
            <a
              target="_blank"
              className="a"
              rel="noreferrer"
              href="https://web.facebook.com/emmanuel.oforiboakye.9/"
            >
              <img
                className="img"
                alt="facebook"
                src="https://rishavchanda.github.io/images/facebook.svg"
              ></img>
            </a>
            <a
              target="_blank"
              className="a"
              rel="noreferrer"
              href="https://twitter.com/manuel___dev"
            >
              <img
                className="img"
                alt="twitter"
                src="https://rishavchanda.github.io/images/twitter.svg"
              ></img>
            </a>
            <a
              target="_blank"
              className="a"
              rel="noreferrer"
              href="https://www.instagram.com/manuel__dev/"
            >
              <img
                className="img"
                alt="IG"
                src="https://rishavchanda.github.io/images/instagram.svg"
              ></img>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default About;
