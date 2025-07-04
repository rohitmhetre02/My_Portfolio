import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <ScrollLink to="home" smooth={true} offset={-70} duration={500} className="logo-text">
          ROH<span className="highlight">IT</span><span className="dot">.</span>
        </ScrollLink>
      </div>

      <div className={`nav-links ${isMobile ? "mobile" : ""} ${isMenuOpen ? "open" : ""}`}>
        {isMobile && (
          <div className="close-icon" onClick={() => setIsMenuOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        )}
        {navLinks.map((link) => (
          <ScrollLink
            key={link.id}
            to={link.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-item"
            activeClass="active"
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            {link.label}
          </ScrollLink>
        ))}
      </div>

      <div className="nav-right">
        <ScrollLink
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
          className="connect-btn"
          onClick={() => isMobile && setIsMenuOpen(false)}
        >
          Connect With Me
        </ScrollLink>
        {isMobile && (
          <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
