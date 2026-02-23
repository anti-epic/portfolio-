import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let's Build Something Amazing</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Ready to Collaborate?</h3>
            <p>
              I'm passionate about creating robust, scalable applications that solve real problems
              and drive business growth. Whether you need a founding engineer to build your MVP,
              a senior developer to scale your platform, or technical leadership to guide your team,
              let's discuss how I can help.
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
              <h4>Core Competencies</h4>
              <div className="expertise-tags">
                <span>Full-Stack Development</span>
                <span>React & Node.js</span>
                <span>Database Design</span>
                <span>API Development</span>
                <span>Team Leadership</span>
                <span>System Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;