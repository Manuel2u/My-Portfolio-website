import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Social from "./Social";

function App() {
  return (
    <div>
    <section className="bg-black">
   <Navbar />
   <Intro />
   </section>
   <About />
   <Education />
   <Skills />
   <Project />
   <Contact />
   <Social />
   </div>
  );
}

export default App;
