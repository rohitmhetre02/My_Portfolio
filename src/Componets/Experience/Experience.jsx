import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Independent / Freelance',
    location: 'Pune, India',
    dates: 'Jun 2022 – Present',
    responsibilities: [
      'Completed business website projects and client-focused digital experiences for growing businesses.',
      'Built dashboard applications to support operations, data visibility and management workflows.',
      'Developed responsive interfaces and integrated business logic for practical web solutions.',
      'Worked directly with clients on requirements, product thinking, implementation and ongoing improvements.',
      'Delivered real-world web work focused on functionality, usability and clean user experience.',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    company: 'GrowPro Rise Pvt. Ltd',
    location: 'Pune, India',
    dates: 'Aug 2025 – Nov 2026',
    responsibilities: [
      'Developed and improved business-focused web applications with modern full-stack workflows.',
      'Built responsive user interfaces and practical frontend experiences aligned with business goals.',
      'Worked across frontend and backend logic to support application functionality, data handling and real-world product use.',
      'Contributed to project execution, feature delivery, debugging and implementation for ongoing product work.',
      'Supported business website and dashboard application development with a focus on usability and delivery.',
    ],
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'Ceeras IT Services',
    location: 'Pune, India',
    dates: 'Feb 2025 – Jun 2025',
    responsibilities: [
      'Worked on MERN stack development tasks across frontend and backend implementation.',
      'Built and improved responsive interfaces using React, JavaScript and related web tools.',
      'Helped integrate application features with Node.js, Express and MongoDB workflows.',
      'Participated in debugging, troubleshooting and improving functionality during development.',
      'Contributed to project execution by supporting feature implementation and practical problem solving.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-shell">
        <div className="experience-header">
          <p className="experience-kicker">EXPERIENCE</p>
          <h2>My professional journey</h2>
        </div>

        <div className="timeline" aria-label="Professional experience timeline">
          {experiences.map((job) => (
            <article key={`${job.title}-${job.company}`} className="experience-item">
              <div className="timeline-dot" aria-hidden="true" />

              <div className="experience-card">
                <div className="experience-topline">
                  <div>
                    <p className="job-title">{job.title}</p>
                    <p className="company-name">{job.company}</p>
                  </div>
                  <div className="job-meta">
                    <span>{job.location}</span>
                    <span>{job.dates}</span>
                  </div>
                </div>

                <ul className="responsibility-list">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
