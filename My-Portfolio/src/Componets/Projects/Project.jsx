import React from 'react'
import './Project.css'
import Foodflow from '../../assets/101.png'
import Zerodha from '../../assets/102.png'
import Travel from '../../assets/103.png'
import Portfolio from '../../assets/104.png'


const projects = [
    {
        title: "FoodFlow",
        name: "Food Delivery Application",
      tech: "  Vite+React, CSS, MongoDB, Node.js, Stripe",
      liveLink: "https://foodflow-ui.onrender.com",
      img:Foodflow
    },
    {
        title: "StockHive",
        name: "Zerodha Clone",
      tech: "Vite+React, Tailwindcss",
      liveLink: "https://zerodha-clone-95gp.onrender.com",
      img:Zerodha
    },
    {
      title: "Rohit-Portfolio",
      name: "Web Developer Portfolio",
    tech: "  Vite+React, CSS, MongoDB, Node.js, Stripe",
    liveLink: "#",
    img:Portfolio
  },
    {
        title: "WanderLust ",
        name: "A Smarter Way to Travel the World",
      tech: "HTML, CSS, JavaScript, Node.js, MongoDB",
      liveLink: "https://wnderlust-project.onrender.com/listings",
      img:Travel
    },

  ];


function Project() {
  return (
    <div className='projects'>
        <h2>Projects</h2>
        <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img}/>
            <a href={project.liveLink}><i class="fa-solid fa-link"></i></a>
            <h4>{project.title}</h4>
            <p>{project.name}</p>
            <p className='tech'>{project.tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project