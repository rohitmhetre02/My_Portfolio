import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';
import './Home.css';
import image from "../../assets/Roya.png";
import Resume from "../../assets/Rohit Mhetre Resume.pdf";
import Linkdian from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";

const Name = "Hi, I'm Rohit Mhetre";
const Decr =
  "Transforming Your Ideas into Reality with High-Quality Web Development, Innovative Solutions, and Modern, Budget-Friendly Designs Tailored to Your Needs.";

function Home() {
  // Create a ref for the Typed instance
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "MERN Stack Developer", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    });

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='container'>
      <div className="home">
        <div className="home-text">
          <h3>{Name}</h3>
          <h1 className="text-3xl font-bold">
            {/* Attach the ref to a span element */}
            <span ref={typedRef}></span>
          </h1>
          <p>{Decr}</p>
          <a className='button' href={Resume}>Download CV</a>

          <div className='social-media'>
            <a href="https://www.linkedin.com/in/rohit-mhetre02/">
              <img src={Linkdian} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/mr_roya_002/">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://wa.me/9370949370?text=Hello%20Rohit">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>

        <div className="home-image">
          <img className="img" src={image} alt="Background" />
        </div>
      </div>
    </div>
  );
}

export default Home;