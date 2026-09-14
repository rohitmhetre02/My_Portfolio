import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './CTA.css';

function CTA() {
  const handleStartProject = () => {
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
    <section className="cta-section" aria-label="Freelance project call to action">
      <div className="cta-shell">
        <div className="cta-glow" aria-hidden="true" />

        <div className="cta-content">
          <p className="cta-kicker">FREELANCE</p>
          <h2>Have a project in mind?</h2>
          <p className="cta-lead">Let&apos;s turn your idea into a working digital product.</p>
          <p className="cta-description">
            Tell me what you&apos;re building, what you need and what you&apos;re trying to achieve.
            I&apos;ll review your requirements and get back to you with the next steps.
          </p>

          <div className="cta-actions">
            <button type="button" className="cta-primary" onClick={handleStartProject}>
              Start a Project
            </button>

            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cta-secondary"
            >
              View My Work
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
