import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Animations.css';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`page-container ${isVisible ? 'fade-in' : ''}`}>
      <h1 className='services'>SERVICES</h1>
    </div>
  );
}
