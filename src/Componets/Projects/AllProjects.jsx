import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Project.css';
import { projects } from './projectsData';

const githubRepositoriesLink = 'https://github.com/rohitmhetre02?tab=repositories';

function AllProjects() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  const grouped = useMemo(() => {
    const g = projects.reduce((acc, p) => {
      acc[p.category] = acc[p.category] || [];
      acc[p.category].push(p);
      return acc;
    }, {});
    return g;
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleBack = () => {
    // Go back in history if possible, otherwise navigate to home
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <main className="all-projects-page">
        <section className="projects-section">
          <div className="projects-page-container">
            <button type="button" onClick={handleBack} className="back-btn" aria-label="Go back">
              <span aria-hidden="true">←</span>
              <span>Back</span>
            </button>

            <header className="projects-header">
              <p className="projects-kicker">ALL PROJECTS</p>
              <h2 className="projects-title">Complete Project Catalogue</h2>
              <p className="projects-subtitle">Browse all projects grouped by category.</p>
            </header>

            <div className="category-filters" aria-label="Project categories">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCategory(c)}
                  className={`category-btn ${selectedCategory === c ? 'active' : ''}`}
                  aria-pressed={selectedCategory === c}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="all-projects-list">
              <div className="project-grid">
                {(selectedCategory === 'All' ? projects : (grouped[selectedCategory] || [])).map((proj) => (
                  <article key={proj.title} className="project-card">
                    <div className="project-image-wrap">
                      <img src={proj.img} alt={`${proj.title} preview`} className="project-img" loading="lazy" />
                      <div className="project-overlay">
                        <span className="category-pill">{proj.category}</span>
                      </div>
                    </div>
                    <div className="project-content">
                      <h4>{proj.title}</h4>
                      <p className="project-description">{proj.description}</p>
                      <div className="tag-list">
                        {proj.tech.map((t) => (
                          <span key={t} className="tag-item">{t}</span>
                        ))}
                      </div>
                      <div className="project-actions">
                        {proj.liveLink && (
                          <a href={proj.liveLink} target="_blank" rel="noreferrer" className="project-link live-link">Live Demo</a>
                        )}
                        <a href={githubRepositoriesLink} target="_blank" rel="noreferrer" className="project-link">View Code</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AllProjects;
