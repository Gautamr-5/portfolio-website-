import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title text-gradient">Experience</h2>
        <div className="timeline">
          <div className="timeline-item glass-card animate-fade-in-up">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>DSA Intern</h3>
                <span className="timeline-company text-gradient">InternPe</span>
              </div>
              <ul className="timeline-details">
                <li>Developed C++ projects</li>
                <li>Improved problem solving</li>
                <li>Wrote modular and reusable code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
