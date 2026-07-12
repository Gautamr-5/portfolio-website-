import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title text-gradient">Who am I?</h2>
        <div className="about-content glass-card animate-fade-in-up">
          <ul className="about-list">
            <li>
              <span className="bullet text-gradient">►</span>
              <p>B.Tech Electrical Engineering @ NIT Patna</p>
            </li>
            <li>
              <span className="bullet text-gradient">►</span>
              <p>Passionate Software Developer</p>
            </li>
            <li>
              <span className="bullet text-gradient">►</span>
              <p>Strong in Data Structures & Algorithms</p>
            </li>
            <li>
              <span className="bullet text-gradient">►</span>
              <p>Interested in Backend, Full Stack and System Design</p>
            </li>
            <li>
              <span className="bullet text-gradient">►</span>
              <p>Looking for SDE Internship / Full-time opportunities</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
