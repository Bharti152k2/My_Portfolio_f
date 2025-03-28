import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Educational from "./Educational";
import Contact from "./Contact";

function Index() {
  return (
    <div className="w-full">
      <Home />
      <Skills />
      <Projects />
      <Services />
      <About />
      <Educational />
      <Contact />
    </div>
  );
}

export default Index;
