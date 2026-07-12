import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title text-gradient">Education</h2>
        <div className="education-card glass-card animate-fade-in-up">
          <div className="education-info">
            <h3 className="education-institute">NIT Patna</h3>
            <p className="education-degree text-gradient">B.Tech Electrical Engineering</p>
          </div>
          <div className="education-duration">
            <span>2023 – 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
