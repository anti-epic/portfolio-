import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header backdrop-blur">
      <nav className="nav container">
        <div className="nav-brand">
          <div className="brand-text">
            <span className="brand-name">Chase Donahoe</span>
            <span className="brand-title">Founding Engineer & UX Leader</span>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#projects" className="nav-link">Portfolio</a></li>
          <li><a href="#contact" className="btn btn-primary">Let's Connect</a></li>
        </ul>
        <button className="mobile-menu-toggle" aria-label="Toggle mobile menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;