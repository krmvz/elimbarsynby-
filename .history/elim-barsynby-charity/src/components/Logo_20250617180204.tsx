import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg width="200" height="100" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(20, 20)">
        <path
          d="M380 80c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z"
          fill="#0088cc"
          transform="scale(0.7)"
        />
        <path
          d="M280 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40z"
          fill="#ffffff"
          transform="translate(80, 20) scale(0.7)"
        />
        <text
          x="10"
          y="120"
          fontFamily="Arial, sans-serif"
          fontSize="72"
          fill="#0088cc"
          fontWeight="bold"
        >
          ЭЛИМ,
        </text>
        <text
          x="10"
          y="200"
          fontFamily="Arial, sans-serif"
          fontSize="72"
          fill="#0088cc"
          fontWeight="bold"
        >
          БАРСЫҢБЫ?!
        </text>
      </g>
    </svg>
  );
};

export default Logo;