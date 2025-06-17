import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="hero">
      <nav className="nav-container">
        <div className="logo">
          <h1>Elim Barsynby Charity Fund</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#donate">Donate</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-content">
        <h2>Making a difference in our community</h2>
        <p>Join us in creating positive change through charitable giving</p>
      </div>
    </header>
  );
};

export default Header;