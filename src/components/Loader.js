import './Loader.css';
import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [activeBarIndex, setActiveBarIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveBarIndex((activeBarIndex + 1) % 3);
    }, 200);

    return () => clearInterval(intervalId);
  }, [activeBarIndex]);

  const bars = [0, 1, 2].map((index) => (
    <div
      key={index}
      className={`bar ${index === activeBarIndex ? 'active' : ''}`}
    />
  ));
  
  return (
    <div className="loading-screen">
      <div className="bars-container">{bars}</div>
    </div>
  );
};

export default Loader;
