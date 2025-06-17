import React from 'react';
import logo from '../images/IMG_3405.PNG';

const Logo: React.FC = () => {
  return (
    <img 
      src={logo} 
      alt="Elim Barsynby Charity Logo" 
      style={{
        width: '10]0px',
        height: 'auto',
        objectFit: 'contain'
      }}
    />
  );
};

export default Logo;