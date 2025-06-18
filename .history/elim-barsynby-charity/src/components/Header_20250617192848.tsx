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
          <a href="#home" className="nav-link">Башкы бет</a>
          <a href="#about" className="nav-link">Биз жөнүндө</a>
          <a href="#donate" className="nav-link">Кайрымдуулук</a>
          <a href="#contact" className="nav-link">Байланыш</a>
        </nav>
      </div>
      
      <div className="hero">
        <h1>git push --set-upstream origin main</h1>
        <p>Сиздин жардамыңыз менен дүйнөнү жакшы жакка өзгөртө алабыз.</p>
      </div>
    </header>
  );
};

export default Header;