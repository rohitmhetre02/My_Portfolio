import React from 'react'
import './About.css';
import image from "../../assets/Rohit.jpg";
import HTML from "../../assets/HTML.png";
import CSS from "../../assets/Css.png";
import JS from "../../assets/JS.png";
import NODEJS from "../../assets/Nodejs.png";
import EXPREES from "../../assets/Expreesjs.png";
import MONGODB from "../../assets/MogoDB.png";
import REACT from "../../assets/React.png";
import GIT from "../../assets/Git.png";
import GITHUB from "../../assets/GitHub.png";
import WORDPRESS from "../../assets/Wordprees.png";
import BOOTSTRAP from "../../assets/Bootstrap.png";
import TAILWIND from "../../assets/Tailwind.png";




const Skills = [
    {
        img: HTML,
        name: "HTML"
    },
    {
        img: CSS,
        name: "CSS"
    },
    {
        img: JS,
        name: "JavaScript"
    },
    {
        img: NODEJS,
        name: "Node.js"
    },
    {
        img: REACT,
        name: "React.js"
    },
    {
        img: EXPREES,
        name: "Express.js"
    },
    {
        img: MONGODB,
        name: "MongoDB"
    },
    {
        img: GIT,
        name: "Git"
    },
    {
        img: GITHUB,
        name: "Github"
    },
    {
        img: WORDPRESS,
        name: "Wordpress"
    },
    {
        img: BOOTSTRAP,
        name: "Bootstrap "
    },
    {
        img: TAILWIND,
        name: "Tailwind"
    },
]

function About() {
    return (
        <div className='continer'>
            <div className='about'>
                <div className="home-image">
                    <img className="background" src={image} alt="Background" />
                </div>
                <div className='detail'>
                    <h4>Hello, I am Mern-Stack Developer</h4>
                    <h1>Having 1+ Years of Experience</h1>
                    <p>I'm Rohit Mhetre, a passionate Frontend Developer 
                        and Full Stack MERN Developer with 1 year of experience 
                        in crafting modern web solutions. I specialize in building 
                        responsive, user-friendly interfaces and robust backend systems 
                        
                        using the latest technologies. My expertise lies in developing 
                        
                        scalable, high-performance applications tailored to diverse industry 
                        needs. I thrive on problem-solving, continuous learning, and leveraging 
                        technology to create impactful digital experiences. Let’s
                         collaborate to bring your ideas to life!
                    </p>
                    <hr></hr>
                    <div className='other'>
                        <div>
                            <p><span>Name: </span> Rohit Mhetre</p>
                            <p><span>Email:
                            </span> rohitmhetre2004@gmail.com</p>
                        </div>
                        <div>
                            <p><span>
                                Nationality: </span> India</p>
                            <p><span>
                                Languages: </span> English, Marathi, Hindi</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='social-Links'>
                <a href="https://www.linkedin.com/in/rohit-mhetre02/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://wa.me/9370949370?text=Hello%20Rohit"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/mr_roya_002/"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div className='experience'>
                <h3>Experience</h3>
                <div className='box'>
                    <h4>Ceeras IT Services</h4>
                    <p>Full  Stcak Developer</p>
                    <p className='current'>Feb 2025 - present</p>
                </div>
            </div>


            <div className='skills'>
                <h3>Skills</h3>
                <div className='card-continer'>
                    {Skills.map((skill, index) => (
                        <div className='card' key={index}>
                            <p>{skill.name}</p>
                            <img src={skill.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About