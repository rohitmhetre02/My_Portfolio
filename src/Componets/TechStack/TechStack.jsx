import React from 'react';
import './TechStack.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaDatabase, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';

const stackGroups = [
  {
    title: 'FRONTEND',
    items: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
    ],
  },
  {
    title: 'BACKEND',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'REST APIs', icon: <FaCode /> },
      { name: 'Authentication', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'DATABASE',
    items: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'TOOLS',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'VS Code', icon: <FaLaptopCode /> },
    ],
  },
];

function TechStack() {
  return (
    <section id="technology" className="techstack-section">
      <div className="techstack-shell">
        <div className="techstack-header">
          <p className="techstack-kicker">TECHNOLOGY</p>
          <h2>Tools I use to build digital products</h2>
        </div>

        <div className="techstack-groups">
          {stackGroups.map((group) => (
            <div key={group.title} className="tech-group">
              <h3>{group.title}</h3>
              <div className="tech-grid">
                {group.items.map((item) => (
                  <div key={item.name} className="tech-badge">
                    <span className="tech-icon" aria-hidden="true">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
