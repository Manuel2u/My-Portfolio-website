import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Education from "./Education";

function App() {
  return (
    <div>
    <section className="bg-black">
   <Navbar />
   <Intro />
   </section>
   <About />
   <Education />
   </div>
  );
}

export default App;
