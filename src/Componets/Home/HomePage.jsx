import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"; // if Footer is in a separate file
import Home from "./Home";
import About from "../About/About";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";

function HomePage() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
