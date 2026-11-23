import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section section-alt">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Building Production Software End to End</h2>
          <p className="section-subtitle">
            Frontend, backend, databases, payments, and smart contracts — shipped to real users
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <div className="story-block">
              <h3>The Journey</h3>
              <p>
                My software engineering journey began with a passion for solving complex problems through code.
                After completing an intensive 1,000+ hour bootcamp at App Academy with a &lt;3% acceptance rate,
                I've mastered the full spectrum of modern web development—from responsive React frontends to
                scalable Node.js backends.
              </p>
              <p>
                As the founding engineer at Power Meta, I shipped or contributed to five products: a GPU e-commerce platform with
                Stripe and crypto checkout, a storage rental app with self-healing job monitoring, a generative AI
                video web app with a GPU job queue, a creator dashboard and fan marketplace, and the smart contracts
                behind them. I owned architecture, code review, and deployments across all of it.
              </p>
            </div>

            <div className="story-block">
              <h3>My Philosophy</h3>
              <p>
                Great engineering is about building solutions that work reliably at scale, regardless of the
                underlying technology. Whether it's a React SPA, a REST API, or a smart contract, I believe in:
              </p>
              <ul className="philosophy-list">
                <li>Clean, maintainable code with comprehensive testing</li>
                <li>User-centered design that drives product success</li>
                <li>Scalable architecture that grows with business needs</li>
                <li>Collaborative development and knowledge sharing</li>
              </ul>
            </div>
          </div>

          <div className="about-expertise">
            <div className="expertise-card">
              <div className="card-icon">⚛️</div>
              <h4>Modern Frontend</h4>
              <p>Expert in React, Vue, and modern JavaScript frameworks with responsive design and state management expertise.</p>
            </div>

            <div className="expertise-card">
              <div className="card-icon">⚡</div>
              <h4>Backend Systems</h4>
              <p>Proficient in Node.js, Express, Python Flask, with experience building RESTful APIs and microservices architectures.</p>
            </div>

            <div className="expertise-card">
              <div className="card-icon">🗄️</div>
              <h4>Database Design</h4>
              <p>Strong experience with PostgreSQL, MongoDB, and MySQL, from schema design to query optimization.</p>
            </div>

            <div className="expertise-card">
              <div className="card-icon">🤖</div>
              <h4>AI-First Development</h4>
              <p>Builds with Claude and Cursor day to day, and has shipped Stable Diffusion, ControlNet, and FFmpeg video pipelines to production.</p>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <div className="cta-content">
            <h3>Ready to build something exceptional?</h3>
            <p>I'm passionate about creating robust, scalable solutions that solve real business problems.</p>
            <a href="#contact" className="btn btn-primary">Start the Conversation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;