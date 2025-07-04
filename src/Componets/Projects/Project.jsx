import React from 'react';
import './Project.css';

import Zerodha from '../../assets/zerodha.png';
import Foodflow from '../../assets/FoodFlow.png';
import Portfolio from '../../assets/Portfolio.png';
import Travel from '../../assets/Travel.png';
import Blog from '../../assets/Blog.png';
import Restoria from '../../assets/Restoria.png';


const projects = [
   {
    title: "Zerodha-Trading-Platform ",
    name: "Website + Dashboard",
    tech: "React, Bootstrap, CSS, Express, MongoDB, Node.js Axios, Material UI, MVC ",
    liveLink: "https://zerodha-frotend.onrender.com/",
    img: Zerodha,
  },
  {
    title: "fullstack-food-delivery-system ",
    name: "Website + Admin Panel",
    tech: "Vite+React, CSS, Express, MongoDB, Node.js, Stripe, Bcrypt.js, MVC",
    liveLink: "https://foodflow-ui.onrender.com/",
    img: Foodflow,
  },
  {
    title: "Portfolio",
    name: "developer",
    tech: "React, Bootstrap, CSS, EmailJS,",
    liveLink: "https://rohit-mhetre-info.onrender.com",
    img: Portfolio,
  },
  {
    title: "WanderLusti-Platform",
    name: "A Smarter Way to Travel the World",
    tech: "HTML, CSS, JavaScript, Express, EJS, Node.js, MongoDB, Bcrypt.js,  MVC, JWT",
    liveLink: "https://wnderlust-project.onrender.com/listings",
    img: Travel,
  },
  
  {
    title: "Tech-Blogs",
    name: "BlogPage + Admin",
    tech: "HTML, CSS, JavaScript, Express, EJS, Node.js, MongoDB, Bcrypt.js,  MVC, JWT",
    liveLink: "https://full-stack-blog-application-with-admin.onrender.com",
    img: Blog,
  },
  {
    title: "Restaurant- Website",
    name: " Website with Table Booking",
    tech: "React, Bootstrap, CSS, EmailJS, Flex/Grid",
    liveLink: "https://restoria-com.onrender.com",
    img: Restoria,
  },
];
function Project() {
  return (
    <section id='projects' className="projects-section">
      <h1 className="projects-title">My latest <span>work</span></h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.name}</p>
              <p className="tech">{project.tech}</p>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
