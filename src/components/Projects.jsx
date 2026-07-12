import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'OS Simulator',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'An interactive simulator for multiple CPU scheduling algorithms with performance metrics.',
      features: ['Multiple CPU scheduling algorithms', 'Interactive Gantt Chart', 'Performance Metrics', 'Modular C++ Backend'],
      tech: ['C++', 'React', 'Next.js', 'TypeScript'],
      github: 'https://github.com/Gautamr-5/OS-Simulator',
      live: 'https://os-simulator-neon.vercel.app/'
    },
    {
      title: 'NIT Patna Market',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive college marketplace for students to buy, sell, and interact.',
      features: ['College marketplace', 'Authentication', 'Chat', 'Search', 'Image Upload'],
      tech: ['MERN Stack'],
      github: 'https://github.com/Pratham2411/nit_patna_market',
      live: 'https://nit-patna-market.vercel.app/'
    },
  
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-gradient">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>}
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
