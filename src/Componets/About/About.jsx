import React from 'react';
import './About.css';
import image from '../../assets/Rohit.jpg';

function About() {
  return (
    <section id="about" className="about-section">

      {/* Section Header */}
      <div className="about-header">
        <p className="about-kicker">ABOUT ME</p>

        <h1 className="section-title">
          Building useful digital experiences with code.
        </h1>

        <p className="about-subtitle">
          A full-stack developer focused on creating modern, responsive,
          and practical web solutions for businesses and individuals.
        </p>
      </div>


      {/* About Content */}
      <div className="about-container">

        {/* Image */}
        <div className="about-image">
          <img
            src={image}
            alt="Rohit Mhetre"
            loading="lazy"
          />
        </div>


        {/* Text */}
        <div className="about-text">

          <h2>Hi, I'm Rohit Mhetre.</h2>

          <p>
            I'm a full-stack developer from Maharashtra, India, focused on
            building modern websites and practical web applications.
            I enjoy turning ideas into real digital products — from clean
            and responsive user interfaces to reliable backend systems
            and database-driven applications.
          </p>

          <p>
            I work with modern web technologies and focus on understanding
            the requirement first, building a clean solution, communicating
            clearly, and delivering a product that is useful for real users.
          </p>


          {/* Focus Areas */}
          <div className="about-focus">

            <div className="focus-item">
              <span className="focus-icon">✓</span>
              <div>
                <h3>Clean Development</h3>
                <p>Structured and maintainable code.</p>
              </div>
            </div>

            <div className="focus-item">
              <span className="focus-icon">✓</span>
              <div>
                <h3>Responsive Design</h3>
                <p>Websites that work across all devices.</p>
              </div>
            </div>

            <div className="focus-item">
              <span className="focus-icon">✓</span>
              <div>
                <h3>User Experience</h3>
                <p>Simple and intuitive interfaces.</p>
              </div>
            </div>

            <div className="focus-item">
              <span className="focus-icon">✓</span>
              <div>
                <h3>Business Requirements</h3>
                <p>Solutions built around real needs.</p>
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* Stats */}
      <div className="about-stats">

        <div className="stat-item">
          <span className="stat-number">1+</span>
          <p>Years of Experience</p>
        </div>

        <div className="stat-item">
          <span className="stat-number">10+</span>
          <p>Projects Completed</p>
        </div>

        <div className="stat-item">
          <span className="stat-number">5+</span>
          <p>Happy Clients</p>
        </div>

      </div>

    </section>
  );
}

export default About;