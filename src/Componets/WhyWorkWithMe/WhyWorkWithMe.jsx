import React from 'react';
import './WhyWorkWithMe.css';
import { FaCode, FaMobileAlt, FaComments, FaTools } from 'react-icons/fa';

const advantages = [
  {
    title: 'FULL-STACK CAPABILITY',
    description: 'Frontend, backend, APIs and database development in one workflow.',
    icon: <FaCode />,
  },
  {
    title: 'RESPONSIVE BY DEFAULT',
    description: 'Websites and applications designed to work across desktop, tablet and mobile.',
    icon: <FaMobileAlt />,
  },
  {
    title: 'CLEAR COMMUNICATION',
    description: 'Simple communication and regular project updates throughout development.',
    icon: <FaComments />,
  },
  {
    title: 'LONG-TERM SUPPORT',
    description: 'I can continue improving, fixing and maintaining your website or application after launch.',
    icon: <FaTools />,
  },
];

function WhyWorkWithMe() {
  return (
    <section className="why-section">
      <div className="why-shell">
        <div className="why-header">
          <p className="why-kicker">WHY WORK WITH ME</p>
          <h2>Why work with me?</h2>
        </div>

        <div className="why-grid">
          {advantages.map((item) => (
            <article key={item.title} className="why-card">
              <div className="why-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithMe;
