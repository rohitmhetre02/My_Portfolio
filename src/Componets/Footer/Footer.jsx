import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <h1>
            Roh<span className="highlight">it</span><span className="dot">.</span>
          </h1>
          <p>
            I am a MERN Stack Developer from India with a passion for building intuitive and scalable web applications.
          </p>
        </div>

        <div className="footer-tagline">
          <p>Star Developer by Rohit Mhetre </p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rohit Mhetre.</p>
      </div>
    </footer>
  );
}

export default Footer;
