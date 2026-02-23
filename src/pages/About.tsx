import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer who loves creating amazing web experiences.
              I specialize in modern web technologies and enjoy solving complex problems
              through clean, efficient code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, or sharing my knowledge with the developer community.
            </p>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              Your Photo Here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;