import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const images = [
  `${process.env.PUBLIC_URL}/images/et-images/IMG_1108.jpeg`,
  `${process.env.PUBLIC_URL}/images/et-images/IMG_1208.jpg`,
  `${process.env.PUBLIC_URL}/images/et-images/IMG_1097.jpeg`,
  `${process.env.PUBLIC_URL}/images/et-images/thumbnail_IMG_8968.jpg`
]

const textContent = [
  { heading: 'Bílastæða- og vegmerkingar'},
  { heading: 'Stöðvunardreglar'},
  { heading: 'Gangbrautarkerfi'},
  { heading: 'Vegleiðarar'}
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeText, setFadeText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeText(false); // Start fading out the text
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeText(true); // Fade in the text after changing the image
      }, 500); // Wait for the text to fade out before changing the image
    }, 5000); // Change image and text every 5 seconds

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
      <div className={`hero-text-container ${fadeText ? 'active' : 'inactive'}`}>
        <div className="hero-text">
          <h1 className="hero-heading">{textContent[currentIndex].heading}</h1>
          <p className="hero-subheading">{textContent[currentIndex].subheading}</p>
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

export default HeroSection;