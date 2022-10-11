import React from "react";
import Card from "./Card";

function Skills(){
    return(
        <div className="bg-white pt-[100px]">
        <div className="bg-skills">
        <h3 className="text-primary font-bold text-center text-3xl">My<span className="text-black"> Skills</span></h3>
        <p className="text-center text-secondary  pt-7 pb-16">Tools and programming languages that I use for development and making projects</p>
        </div>
        <div className="flex flex-row flex-wrap justify-between  bg-skills" >
        <Card
        title="HTML"
        description="I have a good understanding of HTML and I can make a website using HTML"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
         />
            <Card
        title="CSS"
        description="I have a good understanding of CSS and I can make a website using CSS"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            />
            <Card
        title="JavaScript"
        description="I have a good understanding of JavaScript and I can make a website using JavaScript"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            />
            <Card
        title="React"
        description="I have a good understanding of React and I can make a website using React"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            />
            <Card
        title="Node.js"
        description="I have a good understanding of Node.js and I can make a website using Node.js"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            />
            <Card
        title="MongoDB"
        description="I have a good understanding of MongoDB and I can make a website using MongoDB"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            />
            <Card
        title="Git"
        description="I have a good understanding of Git and I can make a website using Git"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg"
            />
            <Card
        title="GitHub"
        description="I have a good understanding of GitHub and I can make a website using GitHub"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
            />
            <Card
        title="Python"
        description="I have a good understanding of Python and I can make a website using Python"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg"
            />
            <Card
        title="Figma"
        description="I have a good understanding of Figma and I can make a website using Figma"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
            />
            <Card
        title="BootStrap"
        description="I have a good understanding of BootStraap and I can make a website using BootStraap"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            />
            <Card
        title="Tailwind"
        description="I have a good understanding of Tailwind and I can make a website using Tailwind"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            />
            <Card
        title="Express"
        description="I have a good understanding of Express and I can make a website using Express"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            />
            <Card
        title="mySQL"
        description="I have a good understanding of mySQL and I can make a website using mySQL"
        link="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            />
            <Card
        title="Postman"
        description="I have a good understanding of Postman and I can make a website using Postman"
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSI0YnE26L3U3cAgwD9XkJT_8iWcln6tVh8cz2EyeAg&s"
            />
        </div> 
        </div>
    );
}

export default Skills;