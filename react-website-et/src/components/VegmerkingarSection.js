import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VegmerkingarSection.css'; // Make sure this points to your CSS file

function VegmerkingarSection() {

  const image = 'images/et-images/Gangbrautarkerfi.jpg'; // Path relative to public directory

  return (
    <div className='vegmerkingar-container'>
      <img
        src={image}
        alt="Vegmerkingar"
        className="vegmerkingar-image"
      />
      <div className="vegmerkingar-text-container">
        <div className="vegmerkingar-text">
          <h1 className="vegmerkingar-heading">Bílastæða- og vegmerkingar</h1>
        </div>
      </div>
      <div className="vegmerkingar-btns">
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

export default VegmerkingarSection;
