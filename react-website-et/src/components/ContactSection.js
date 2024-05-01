import React from 'react';
import { Button } from './Button';
import './ContactSection.css';

function ContactSection() {
  return (
    <div className='contact-container'>
      <div className='contact-header'>
      <h1>Hafa Samband</h1>
      <p>Sendu okkur fyrirspurnir hér og við svörum við fyrsta tækifæri</p>
      </div>
      <div className='input-areas'>
        <form>
          <input
            className='email-input'
            name='email'
            type='email'
            placeholder='Netfangið þitt'
          />
          <textarea
            className='inquiry-input'
            name='inquiry'
            placeholder='Fyrirspurn'
            rows='4' // Adjust the number of rows as needed
          />
          <Button buttonStyle='btn--outline'>Senda</Button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;