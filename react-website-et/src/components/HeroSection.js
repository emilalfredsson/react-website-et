import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>E TÓMASSON</h1>
      <p>Bílastæða- og vegmerkingar</p>
      <div className="hero-btns">
        <Button 
         className='btns' 
         buttonStyle='btn--outline'
         buttonSize='btn--large'>
            HAFA SAMBAND
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
