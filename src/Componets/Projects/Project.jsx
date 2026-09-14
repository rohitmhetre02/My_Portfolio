import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

import { projects, caseStudy, allProjectsExternal } from './projectsData';

const allProjectsLink = '/projects/all';

function Project() {
  return (
    <>
      <section id="projects" className="projects-section">
        <div className="projects-header">
          <p className="projects-kicker">SELECTED WORK</p>

          <h2 className="projects-title">
            Projects I've built
          </h2>

          <p className="projects-subtitle">
            A selection of websites and web applications I've designed and developed.
          </p>
        </div>

        <div className="project-grid">
          {/* Show ONLY 6 projects on the homepage */}
          {projects.slice(0, 6).map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image-wrap">
                <img
                  src={project.img}
                  alt={`${project.title} project preview by Rohit Mhetre`}
                  className="project-img"
                  loading="lazy"
                  width="800"
                  height="560"
                />

                <div className="project-overlay">
                  <span className="category-pill">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta-row">
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tag-list">
                  {project.tech.map((tag) => (
                    <span key={tag} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link live-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Go to the page containing ALL projects */}
        <div className="projects-footer-cta">
          <Link
            to={allProjectsLink}
            className="view-all-projects-btn"
          >
            View all projects
          </Link>
        </div>
      </section>

      <section
        className="case-study"
        aria-label="Project case study"
      >
        <div className="case-study-shell">
          <div className="case-study-heading">
            <p className="case-study-kicker">CASE STUDY</p>

            <h3>{caseStudy.projectName}</h3>
          </div>

          <div className="case-study-intro">
            <div className="case-study-copy">
              <div className="meta-block">
                <span className="meta-label">Category</span>
                <p>{caseStudy.category}</p>
              </div>

              <div className="meta-block">
                <span className="meta-label">Short summary</span>
                <p>{caseStudy.summary}</p>
              </div>
            </div>

            <div className="case-study-actions">
              <a
                href={caseStudy.liveLink}
                target="_blank"
                rel="noreferrer"
                className="primary-case-btn"
              >
                Live Demo
              </a>

              <a
                href={caseStudy.githubLink}
                target="_blank"
                rel="noreferrer"
                className="secondary-case-btn"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="case-study-grid">
            <div className="case-study-panel">
              <h4>The Challenge</h4>
              <p>{caseStudy.challenge}</p>
            </div>

            <div className="case-study-panel">
              <h4>The Solution</h4>
              <p>{caseStudy.solution}</p>
            </div>
          </div>

          <div className="case-study-details">
            <div className="case-study-panel">
              <h4>Key Features</h4>

              <ul>
                {caseStudy.features.map((feature) => (
                  <li key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="case-study-panel">
              <h4>Technology</h4>

              <div className="tech-badges">
                {caseStudy.technology.map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="case-study-details single">
            <div className="case-study-panel">
              <h4>My Role</h4>
              <p>{caseStudy.myRole}</p>
            </div>

            <div className="case-study-panel">
              <h4>Result</h4>
              <p>{caseStudy.result}</p>
            </div>
          </div>

          <div className="screen-gallery">
            <div className="screen-main">
              <img
                src={caseStudy.screenshot}
                alt={`${caseStudy.projectName} case study preview created by Rohit Mhetre`}
                loading="lazy"
                width="1100"
                height="680"
              />
            </div>

            <div className="screen-stack">
              <img
                src={caseStudy.image1}
                alt={`${caseStudy.projectName} dashboard preview for a web application project by Rohit Mhetre`}
                loading="lazy"
                width="520"
                height="360"
              />

              <img
                src={caseStudy.imgae2}
                alt={`${caseStudy.projectName} mobile layout preview created by Rohit Mhetre`}
                loading="lazy"
                width="520"
                height="360"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;