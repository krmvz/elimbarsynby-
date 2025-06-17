import React from 'react';

const Logo: React.FC = () => {
  const logoPath = process.env.PUBLIC_URL + '/IMG_3405.PNG';
  
  return (
    <img 
      src={logoPath}
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