import React from "react";
import Card from "./Card";
import postmansvg from "../assets/postmansvg.svg";

function Skills() {
    return (
        <div className="bg-white sm:pt-[0px] md:pt-[100px]">
            <div className="bg-skills">
                <h3 className="text-primary font-bold text-center text-3xl pt-14">My<span className="text-black"> Skills</span></h3>
                <p className="text-center text-secondary  pt-7 pb-16">Tools and programming languages that I use for development and making projects</p>
            </div>
            <div className="flex flex-row flex-wrap justify-between  bg-skills" >
                <Card
                    title="HTML"
                    description="I use this language for creating Websites."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                />
                <Card
                    title="CSS"
                    description="I use this language for styling and designing Websites."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                />
                <Card
                    title="JavaScript"
                    description="I use this programming language for making websites responsive and build them with full functionality."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                />
                <Card
                    title="React"
                    description="I use this framework for making webapp."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                />
                <Card
                    title="Node.js"
                    description="I use this runtime environment for making backend of webapp."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                />
                <Card
                    title="MongoDB"
                    description="I use this database for storing data in a website."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                />
                <Card
                    title="Git"
                    description="I use this version control system for managing my projects."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg"
                />
                <Card
                    title="GitHub"
                    description="I use this tool for publishing my works and projects in the repository, and also contributing in open source projects"
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                />
                <Card
                    title="Python"
                    description="I am learning this programming language and I have also build some projects using this language."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg"
                />
                <Card
                    title="Figma"
                    description="I use this mostly for making app and website UI/UX design'sI have a good understanding of Figma and I can make a website using Figma"
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
                />
                <Card
                    title="BootStrap"
                    description="I use this library for making responsive websites."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                />
                <Card
                    title="TailwindCSS"
                    description="I use this utility-first CSS framework for making responsive websites."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                />
                <Card
                    title="Express"
                    description="I use this framework along with Node.js for making webapp."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                />
                <Card
                    title="mySQL"
                    description="I use this database for making webapp."
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                />
                <Card
                    title="Postman"
                    description="I use this for making API's and testing them."
                    link={postmansvg}
                />
            </div>
        </div>
    );
}

export default Skills;