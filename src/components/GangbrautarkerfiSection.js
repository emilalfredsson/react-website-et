import React from 'react';
import '../App.css';
import { Button } from './Button';
import './GangbrautarkerfiSection.css';

function GangbrautarkerfiSection() {

  const image = 'images/Screenshot 2024-06-19 220121.png';

  return (
    <div className='gangbrautarkerfi-container'>
      <img
        src={image}
        alt="gangbrautarkerfi"
        className="gangbrautarkerfi-image"
      />
      <div className="gangbrautarkerfi-text-container">
        <div className="gangbrautarkerfi-text">
          <h1 className="gangbrautarkerfi-heading">Gangbrautarkerfi</h1>
        </div>
      </div>
      <div className="gangbrautarkerfi-btns">
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

export default GangbrautarkerfiSection;
