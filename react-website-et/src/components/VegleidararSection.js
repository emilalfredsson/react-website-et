import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VegleidararSection.css'; // Make sure this points to your CSS file

function VegleidararSection() {

  const image = 'images/et-images/thumbnail_IMG_8968.jpg'; // Path relative to public directory

  return (
    <div className='vegleidarar-container'>
      <img
        src={image}
        alt="vegleidarar"
        className="vegleidarar-image"
      />
      <div className="vegleidarar-text-container">
        <div className="vegleidarar-text">
          <h1 className="vegleidarar-heading">Vegleiðarar</h1>
        </div>
      </div>
      <div className="vegleidarar-btns">
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

export default VegleidararSection;
