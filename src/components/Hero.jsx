import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name text-gradient">Gautam Raj 👋</h1>
          <h2 className="hero-role">Software Developer | Competitive Programmer</h2>
          <p className="hero-description">
            Building scalable web applications and solving algorithmic challenges with clean, efficient code.
          </p>
          <div className="hero-cta">
            <a href="https://drive.google.com/file/d/1E0TVFVq8UKSLJXHajJzkon-A6LtJEZp6/view?usp=drive_link" className="btn btn-primary">Resume</a>
            <a href="https://github.com/Gautamr-5" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
            <a href="www.linkedin.com/in/gautamraj5" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LeetCode</a>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-placeholder">
            <span>Photo / Illustration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
