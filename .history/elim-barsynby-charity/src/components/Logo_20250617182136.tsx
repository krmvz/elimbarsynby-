import React from 'react';
// import logoImage from '../images/IMG_3405.PNG';
import logiImage from "../"

const Logo: React.FC = () => {
  return (
    <img 
      src={logoImage} 
      alt="Elim Barsynby Charity Logo" 
      style={{
        width: '150px',
        height: 'auto',
        objectFit: 'contain'
      }}
    />
  );
};

export default Logo;