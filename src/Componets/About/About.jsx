import React from 'react';
import './About.css';
import image from "../../assets/Rohit.jpg";

import HTML from "../../assets/HTML.png";
import CSS from "../../assets/CSS.png";
import JS from "../../assets/JS.png";
import NODEJS from "../../assets/Nodejs.png";
import EXPRESS from "../../assets/Expreesjs.png";
import MONGODB from "../../assets/MogoDB.png";
import REACT from "../../assets/React.png";
import GIT from "../../assets/Git.png";
import GITHUB from "../../assets/GitHub.png";
import WORDPRESS from "../../assets/Wordprees.png";
import BOOTSTRAP from "../../assets/Bootstrap.png";
import TAILWIND from "../../assets/Tailwind.png";

const Skills = [
  { img: HTML, name: "HTML" },
  { img: CSS, name: "CSS" },
  { img: JS, name: "JavaScript" },
  { img: NODEJS, name: "Node.js" },
  { img: REACT, name: "React.js" },
  { img: EXPRESS, name: "Express.js" },
  { img: MONGODB, name: "MongoDB" },
  { img: GIT, name: "Git" },
  { img: GITHUB, name: "GitHub" },
  { img: WORDPRESS, name: "WordPress" },
  { img: BOOTSTRAP, name: "Bootstrap" },
  { img: TAILWIND, name: "Tailwind CSS" },
];

function About() {
  return (
    <section id="about" className="about-section">
      <h1 className="section-title">About <span className="highlight">me</span></h1>

      <div className="about-container">
        <div className="about-image">
          <img src={image} alt="Rohit Mhetre" />
        </div>
        <div className="about-text">
          <p>
            I'm Rohit Mhetre, a passionate Frontend and Full Stack MERN Developer with 1+ years of experience building modern web solutions. I create responsive interfaces and scalable backends using the latest tools.
          </p>
          <p>
            I’m driven by problem-solving, clean code, and meaningful digital products that create impact.
          </p>

          <div className="skill-bars">
            <div className="skill-bar">
              <span>HTML & CSS</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>React JS</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>JavaScript</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Backend</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div><span className="gradient">1+</span><p>Years of Experience</p></div>
        <div><span className="gradient">10+</span><p>Projects Completed</p></div>
        <div><span className="gradient">5+</span><p>Happy Clients</p></div>
      </div>

      <div className="experience-section">
        <h2>Experience</h2>
        <div className="experience-box">
          <h3>Ceeras IT Services</h3>
          <p>Full Stack Developer</p>
          <p className="date">Feb 2025 – Jun 2025</p>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
