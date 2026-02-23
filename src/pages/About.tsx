import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section section-alt">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Full Stack Innovation That Delivers</h2>
          <p className="section-subtitle">
            Bridging blockchain technology with traditional web applications for enhanced user experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <div className="story-block">
              <h3>The Journey</h3>
              <p>
                My path into software engineering began with a deep curiosity about emerging technologies
                and their potential to transform how we interact with digital systems. After completing
                an intensive 1,000+ hour bootcamp at App Academy with a &lt;3% acceptance rate, I dove
                headfirst into the world of blockchain and decentralized applications.
              </p>
              <p>
                At Power Meta, I've had the privilege of architecting secure smart contracts and
                developing full-stack applications that seamlessly integrate blockchain technology
                with traditional web experiences. This unique intersection of cutting-edge crypto
                technology and practical user interface design drives my passion for innovation.
              </p>
            </div>

            <div className="story-block">
              <h3>My Philosophy</h3>
              <p>
                Great engineering happens at the intersection of technical excellence and user-centric
                design. Whether building smart contracts or leading teams, I believe in:
              </p>
              <ul className="philosophy-list">
                <li>Security-first architecture in blockchain development</li>
                <li>Gas-efficient smart contract optimization</li>
                <li>Seamless integration of Web3 with traditional UX patterns</li>
                <li>Data-driven decision making and operational excellence</li>
              </ul>
            </div>
          </div>

          <div className="about-expertise">
            <div className="expertise-card">
              <div className="card-icon">🔗</div>
              <h4>Blockchain Architecture</h4>
              <p>Expert in smart contract development, gas optimization, and building secure decentralized applications on Ethereum.</p>
            </div>

            <div className="expertise-card">
              <div className="card-icon">⚡</div>
              <h4>Full-Stack Development</h4>
              <p>Proficient in modern web technologies including React, Node.js, and Express with responsive front-end design.</p>
            </div>

            <div className="expertise-card">
              <div className="card-icon">🎯</div>
              <h4>Web3 Integration</h4>
              <p>Specialized in bridging traditional web applications with blockchain technology for seamless user experiences.</p>
            </div>

            <div className="expertise-card">
              <div className="card-icon">👥</div>
              <h4>Team Leadership</h4>
              <p>Proven track record leading teams of 80+ employees, achieving #1 NPS scores and driving operational excellence.</p>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <div className="cta-content">
            <h3>Ready to build the future of Web3?</h3>
            <p>I'm passionate about creating innovative solutions that bridge traditional web with blockchain technology.</p>
            <a href="#contact" className="btn btn-primary">Start the Conversation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;