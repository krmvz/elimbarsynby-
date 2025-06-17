import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Байланыш</h3>
          <p>Эл. почта: info@elimbarsynby.org</p>
          <p>Телефон: (555) 123-4567</p>
          <p>Дарек: 123 Charity Lane, City, State 12345</p>
        </div>
        
        <div className="footer-section">
          <h3>Шилтемелер</h3>
          <ul>
            <li><a href="#about">Биз жөнүндө</a></li>
            <li><a href="#programs">Программалар</a></li>
            <li><a href="#volunteer">Ыктыярчы болуу</a></li>
            <li><a href="#donate">Кайрымдуулук</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Бизди көзөмөлдөө</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Элим барсыңбы кайрымдуулук фонду. Бардык укуктар корголгон.</p>
      </div>
    </footer>
  );
};

export default Footer;