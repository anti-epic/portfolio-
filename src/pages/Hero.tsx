import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero section">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badge">
            <span className="badge-icon">⚡</span>
            <span>Full Stack Founding Software Engineer</span>
          </div>

          <h1 className="hero-title">
            Chase Donahoe<br />
            <span className="text-gradient">Full Stack Software Engineer</span>
          </h1>

          <p className="hero-subtitle">
            Full stack software engineer with 3+ years as a founding engineer, building production web apps end to end with React, Node.js, Express,
            and PostgreSQL — REST APIs, Stripe payments, dashboards, job queues, and monitoring, plus
            Solidity smart contracts. I work AI-first with Claude and Cursor to ship like a much larger team.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">5</div>
              <div className="stat-label">Products Shipped</div>
            </div>
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Full Stack</div>
            </div>
            <div className="stat">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Hours Coding</div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
          </div>

          <div className="hero-scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-arrow">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1V11M6 11L2 7M6 11L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;