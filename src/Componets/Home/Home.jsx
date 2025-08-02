import React from "react";
import { Link as ScrollLink } from 'react-scroll';


import "./Home.css";
import image from "../../assets/Roya.png";
import Resume from "../../assets/Rohit Mhetre Resume.pdf";

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <img src={image} alt="Rohit Mhetre" />
        </div>
        <h1 className="hero-title">
          I'm <span className="gradient-text">Rohit Mhetre</span>,
          <br /> MERN Stack Developer based in India.
        </h1>
        <p className="hero-description">
          I’m a MERN Stack developer from Maharashtra, India with a strong passion for building high-quality MERN stack web applications. I focus on clean code, performance, and real-world business impact. I have worked on multiple full-stack projects that solve real-life problems.
        </p>
        <div className="hero-buttons">
         <ScrollLink
  to="contact"
  smooth={true}
  duration={500}
  offset={-70}  
  className="primary-btn"
>
  Connect with me
</ScrollLink>

          <a href={Resume} className="secondary-btn">My resume</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
