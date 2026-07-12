import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    { icon: '🏆', text: 'Amazon HackOn Top 75' },
    { icon: '🏆', text: 'Adobe India Hackathon Semifinalist' },
    { icon: '🏆', text: 'Top 15 Codolio Leaderboard' },
    { icon: '⭐', text: '1800+ LeetCode Rating' },
    { icon: '⭐', text: '1200+ Problems Solved' }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title text-gradient">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card glass-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="achievement-icon">{item.icon}</span>
              <p className="achievement-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
