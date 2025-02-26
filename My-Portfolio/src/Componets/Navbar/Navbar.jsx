import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";


const Rohit = [
  { path: "/", label: "Rohit Mhetre" }
];

const HEADER_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/project", label: "Projects" },
  { path: "/contact", label: "Contact" }
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="nav-name">
        <h1> {Rohit.map((link) => (
          <Link key={link.path} to={link.path} className={location.pathname === link.path ? "active" : ""}>
            {link.label}
          </Link>
        ))}</h1>
      </div>




      {isMobile && (
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      )}

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {isMobile && (
          <div className="close-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        )}
    

        {HEADER_LINKS.map((link) => (
          <Link key={link.path} to={link.path} className={location.pathname === link.path ? "active" : ""}>
            {link.label}
          </Link>
        ))}

        
      </div>
    </nav>
  );
}

export default Navbar;
