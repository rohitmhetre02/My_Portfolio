import React from 'react';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'I learn about your business, goals, target users and requirements.',
  },
  {
    number: '02',
    title: 'PLAN',
    description: 'I define the features, technology stack and development approach.',
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'I create a clean and responsive interface focused on usability.',
  },
  {
    number: '04',
    title: 'DEVELOP',
    description: 'I build the frontend, backend, database and required integrations.',
  },
  {
    number: '05',
    title: 'TEST',
    description: 'I test functionality, responsiveness and the overall user experience.',
  },
  {
    number: '06',
    title: 'LAUNCH',
    description: 'I deploy the project and prepare everything for a successful launch.',
  },
];

function Process() {
  return (
    <section id="process" className="process-section">
      <div className="process-shell">
        <div className="process-header">
          <p className="process-kicker">HOW I WORK</p>
          <h2>From idea to launch</h2>
          <p className="process-description">
            A simple and transparent process designed to keep your project clear, organized and
            moving forward.
          </p>
        </div>

        <div className="process-grid" aria-label="Project process steps">
          {steps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-card">
                <h3>
                  {step.number} — {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
