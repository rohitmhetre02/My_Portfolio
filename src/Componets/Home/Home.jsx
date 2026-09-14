import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "./Home.css";
import image from "../../assets/Rohit.jpg";

const serviceItems = [
  {
    title: "Business Websites",
    description: "Modern responsive websites for businesses and professionals.",
    icon: "▣",
  },
  {
    title: "Web Applications",
    description: "Custom applications with frontend, backend and database functionality.",
    icon: "◫",
  },
  {
    title: "Landing Pages",
    description: "High-quality landing pages designed to communicate a product or service clearly.",
    icon: "▤",
  },
  {
    title: "Admin Dashboards",
    description: "Responsive dashboards for managing business data and operations.",
    icon: "▥",
  },
  {
    title: "E-Commerce",
    description: "Online stores with product, cart, order and management functionality.",
    icon: "◬",
  },
  {
    title: "Custom Solutions",
    description: "Small business-specific applications and integrations.",
    icon: "✦",
  },
];

const featuredServices = [
  {
    title: "Website Development",
    description: "Modern, responsive websites for businesses, startups, professionals and personal brands.",
    features: [
      "Responsive design",
      "Mobile optimization",
      "Contact forms",
      "SEO-friendly structure",
      "Deployment",
    ],
    cta: "Discuss a Website",
    projectType: "Website Development",
    message: "I'm interested in building a website for my business.",
  },
  {
    title: "Full-Stack Web Applications",
    description: "Complete web applications with frontend, backend, APIs and database integration.",
    features: [
      "React frontend",
      "Node.js / Express backend",
      "REST APIs",
      "Database integration",
      "Authentication",
    ],
    cta: "Build an Application",
    projectType: "Full-Stack Web Application",
    message: "I'm interested in building a custom full-stack web application.",
  },
  {
    title: "E-Commerce Development",
    description: "Modern online stores designed around a smooth customer shopping experience.",
    features: [
      "Product management",
      "Shopping cart",
      "Orders",
      "Admin functionality",
      "Payment integration when required",
    ],
    cta: "Build My Store",
    projectType: "E-Commerce Development",
    message: "I'm interested in building an e-commerce website.",
  },
  {
    title: "Admin Dashboards",
    description: "Custom dashboards that make business information easier to manage and understand.",
    features: [
      "Authentication",
      "CRUD functionality",
      "Search and filters",
      "Data management",
      "Responsive interface",
    ],
    cta: "Build My Dashboard",
    projectType: "Admin Dashboard",
    message: "I'm interested in building an admin dashboard.",
  },
  {
    title: "Maintenance & Improvements",
    description: "Fix, improve and maintain existing websites and applications.",
    features: [
      "Bug fixing",
      "UI improvements",
      "Performance improvements",
      "Feature additions",
      "Deployment support",
    ],
    cta: "Improve My Website",
    projectType: "Website Maintenance",
    message: "I need help improving or maintaining my existing website.",
  },
];

const scrollToContact = (projectType = "Other", message = "") => {
  const contactSection = document.getElementById("contact");

  if (contactSection) {
    const top = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }

  window.dispatchEvent(
    new CustomEvent("portfolio-contact-select", {
      detail: {
        projectType,
        message,
        serviceName: projectType === "Other" ? "General enquiry" : projectType,
      },
    })
  );
};

function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <p className="eyebrow">FREELANCE FULL-STACK DEVELOPER</p>

            <h1 className="hero-title">
              I build websites &amp; web applications that help businesses grow.
            </h1>

            <p className="hero-description">
              I&apos;m Rohit Mhetre, a freelance full-stack developer and website developer from
              Maharashtra, India. I design and build modern, responsive websites and custom web
              application experiences for businesses, startups and growing brands.
            </p>

            <div className="availability-row">
              <span className="status-dot" aria-hidden="true" />
              <span>Available for freelance projects</span>
            </div>

            <div className="hero-buttons">
              <button
                type="button"
                className="primary-btn"
                onClick={() => scrollToContact("Other")}
              >
                Start a Project
              </button>

              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="secondary-btn"
              >
                View My Work
              </ScrollLink>
            </div>

            <ul className="capabilities" aria-label="Core capabilities">
              <li>✓ Responsive Design</li>
              <li>✓ Full-Stack Development</li>
              <li>✓ Business-Focused Solutions</li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="Professional photo section">
            <div className="photo-frame">
              <img
                src={image}
                alt="Rohit Mhetre, freelance full-stack developer from Maharashtra, India"
                width="520"
                height="620"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-trust" id="services" aria-label="What I build">
        <div className="services-header">
          <p className="section-kicker">WHAT I BUILD</p>
          <p className="section-subheading">
            Practical digital solutions designed around your goals, users and business
            requirements.
          </p>
        </div>

        <div className="services-grid">
          {serviceItems.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="full-services" aria-label="Services offered">
        <div className="full-services-header">
          <p className="section-kicker">SERVICES</p>
          <h2>How I can help your business</h2>
          <p>
            From a simple business website to a custom full-stack application, I build practical
            digital solutions based on your requirements.
          </p>
        </div>

        <div className="full-services-grid">
          {featuredServices.map((service) => (
            <article key={service.title} className="service-panel">
              <div className="panel-topline" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p className="service-panel-description">{service.description}</p>

              <ul className="feature-list">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <button
                type="button"
                className="service-cta"
                onClick={() => scrollToContact(service.projectType, service.message)}
              >
                {service.cta}
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
