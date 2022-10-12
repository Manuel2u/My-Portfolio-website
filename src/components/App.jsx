import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project";

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
   </div>
  );
}

export default App;
