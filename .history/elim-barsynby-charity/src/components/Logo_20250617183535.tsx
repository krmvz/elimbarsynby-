import React from 'react';

const Logo: React.FC = () => {
  return (
    <img 
      src={require('../images/IMG_3405.PNG')} 
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
