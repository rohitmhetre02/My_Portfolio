import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand-mark">ROHIT.</div>
          <p className="footer-role">Freelance Full-Stack Developer</p>
          <p className="footer-copy">
            Building modern websites and web applications for businesses, startups and individuals.
          </p>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>Websites</li>
            <li>Web Applications</li>
            <li>E-Commerce</li>
            <li>Dashboards</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/rohit-mhetre02/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/rohitmhetre02" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:rohitmhetre2004@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Rohit Mhetre. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
