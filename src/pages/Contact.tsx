import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let's Build the Future Together</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Ready to Innovate?</h3>
            <p>
              I'm passionate about blockchain technology and its potential to transform
              how we build and interact with digital systems. Whether you're looking
              for a founding engineer to architect your Web3 vision or need expertise
              in smart contract development, let's connect.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <strong>Email</strong>
                  <a href="mailto:donahoe.chase@gmail.com">donahoe.chase@gmail.com</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <strong>Phone</strong>
                  <a href="tel:7134946007">(713) 494-6007</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <strong>LinkedIn</strong>
                  <a href="https://linkedin.com/in/chase-donahoe" target="_blank" rel="noopener noreferrer">linkedin.com/in/chase-donahoe</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">🌎</div>
                <div className="contact-details">
                  <strong>Location</strong>
                  <span>Santa Ana, CA 92707</span>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <h4>Areas of Expertise</h4>
              <div className="expertise-tags">
                <span>Smart Contract Development</span>
                <span>DeFi Protocols</span>
                <span>Web3 Integration</span>
                <span>Blockchain Architecture</span>
                <span>Full-Stack Development</span>
                <span>Team Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;