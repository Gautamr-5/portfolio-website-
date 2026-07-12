import React from 'react';
import './CodingProfiles.css';

const CodingProfiles = () => {
  const profiles = [
    { name: 'LeetCode', link: '#' },
    { name: 'CodeChef', link: '#' },
    { name: 'Codeforces', link: '#' },
    { name: 'GitHub', link: '#' },
    { name: 'Codolio', link: '#' }
  ];

  return (
    <section id="profiles" className="profiles-section">
      <div className="container">
        <h2 className="section-title text-gradient">Coding Profiles</h2>
        <div className="profiles-flex">
          {profiles.map((profile, index) => (
            <a key={index} href={profile.link} target="_blank" rel="noreferrer" className="profile-btn glass-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {profile.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
