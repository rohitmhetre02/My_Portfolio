import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const scrollTargets = {
  home: "home",
  services: "services",
  projects: "projects",
  experience: "experience",
  about: "about",
  contact: "contact",
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 32);

    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (linkId) => {
    setActiveNav(linkId);
    setIsMenuOpen(false);
  };

  const handleContactCta = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const top = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }

    window.dispatchEvent(
      new CustomEvent("portfolio-contact-select", {
        detail: {
          projectType: "Other",
          message: "",
          serviceName: "General enquiry",
        },
      })
    );
  };

  return (
    <>
      {isMobile && isMenuOpen && (
        <button
          type="button"
          className="nav-overlay"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="navbar-inner">
          <div className="navbar-logo">
            <ScrollLink
              to="home"
              smooth={true}
              offset={-80}
              duration={500}
              className="logo-text"
              onClick={() => setActiveNav("home")}
            >
              ROHIT<span className="dot">.</span>
            </ScrollLink>
          </div>

          <div className={`nav-links ${isMobile ? "mobile" : ""} ${isMenuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={scrollTargets[link.id] || "home"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`nav-item ${activeNav === link.id ? "active" : ""}`}
                activeClass="active"
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </ScrollLink>
            ))}

            {isMobile && (
              <button
                type="button"
                className="mobile-cta"
                onClick={() => {
                  setActiveNav("contact");
                  setIsMenuOpen(false);
                  handleContactCta();
                }}
              >
                Start a Project
              </button>
            )}
          </div>

          <div className="nav-right">
            <button
              type="button"
              className="cta-button"
              onClick={() => {
                setActiveNav("contact");
                setIsMenuOpen(false);
                handleContactCta();
              }}
            >
              Start a Project
            </button>

            {isMobile && (
              <button
                type="button"
                className="menu-icon"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
