import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './SafetySection.css';

const images = [
  'images/et-images/IMG_0554.jpeg',
  'images/et-images/IMG_0639.jpeg',
  'images/et-images/thumbnail_IMG_0992.jpg',
  'images/et-images/IMG_0948-2.jpeg',
  'images/et-images/safety.png'
];

function SafetySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='hero-container'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`hero-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
      <div className='hero-text-container active'>
        <div className="hero-text">
          <h1 className="hero-heading">Málun og Þjónusta</h1>
        </div>
      </div>
      <div className="hero-btns">
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          HAFA SAMBAND
        </Button>
      </div>
    </div>
  );
}

export default SafetySection;
