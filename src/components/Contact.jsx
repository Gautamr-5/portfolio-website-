import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title text-gradient">Get In Touch</h2>
        <div className="contact-container glass-card animate-fade-in-up">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any opportunities or collaborations.</p>
            <ul className="contact-details">
              <li><span>Email:</span> gautam@example.com</li>
              <li><span>Phone:</span> +91 1234567890</li>
              <li><span>Location:</span> Patna, India</li>
            </ul>
            <div className="contact-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
