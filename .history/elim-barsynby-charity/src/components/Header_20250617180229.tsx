import React from 'react';
import Logo from './Logo';
import './styles.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <Logo />
        </div>
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#donate" className="nav-link">Donate</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
      
      <div className="hero">
        <h1>Make a Difference Today</h1>
        <p>Your generosity can change lives. Join us in making the world a better place.</p>
      </div>
    </header>
  );
};

export default Header;