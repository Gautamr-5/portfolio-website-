import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const skills = [
    { category: 'Languages', items: ['C++', 'Java', 'JavaScript', 'Python', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST API'] },
    { category: 'Database', items: ['MongoDB', 'MySQL'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux'] }
  ];

  return (
    <section id="skills" className="tech-stack-section">
      <div className="container">
        <h2 className="section-title text-gradient">Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card glass-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((item, idx) => (
                  <span key={idx} className="skill-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
