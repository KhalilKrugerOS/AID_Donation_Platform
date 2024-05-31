"use client";
import React, { useState } from 'react';


const RotatableSVG = ({ svgPath }) => {
  const [rotated, setRotated] = useState(false);

  const handleMouseEnter = () => {
    setRotated(true);
  };

  const handleMouseLeave = () => {
    setRotated(false);
  };

  return (
    <svg
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fill-current"
      style={{
        transition: 'transform 0.5s ease',
        transform: rotated ? 'rotate(360deg)' : 'rotate(0deg)'
      }}
      width="300"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d={svgPath} />
    </svg>
  );
};

export default RotatableSVG;
