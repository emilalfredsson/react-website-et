import React from 'react';
import '../App.css';
import { Button } from './Button';
import './StodvunardreglarSection.css'; // Make sure this points to your CSS file

function StodvunardreglarSection() {

  const image = 'images/Screenshot 2024-06-19 214458.png'; // Path relative to public directory

  return (
    <div className='stodvunardreglar-container'>
      <img
        src={image}
        alt="stodvunardreglar"
        className="stodvunardreglar-image"
      />
      <div className="stodvunardreglar-text-container">
        <div className="stodvunardreglar-text">
          <h1 className="stodvunardreglar-heading">Stöðvunardreglar</h1>
        </div>
      </div>
      <div className="stodvunardreglar-btns">
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

export default StodvunardreglarSection;
