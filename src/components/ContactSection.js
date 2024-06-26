import React, { useRef } from 'react';
import './ContactSection.css';
import './Button.css';

function ContactSection() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    // Basic validation
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{7}$/;

    if (!name) {
      alert('Nafn er nauðsynlegt');
      return;
    }
    if (!email) {
      alert('Netfang er nauðsynlegt');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Netfangið er ekki gilt');
      return;
    }
    if (!phone) {
      alert('Símanúmer er nauðsynlegt');
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert('Símanúmerið þarf að vera 7 tölustafir');
      return;
    }
    if (!message) {
      alert('Fyrirspurn er nauðsynleg');
      return;
    }

    // Set the redirect URL dynamically
    formData.set('redirectTo', `${window.location.origin}/thankyou`);

    // Create a temporary form element to submit the data
    const tempForm = document.createElement('form');
    tempForm.action = form.action;
    tempForm.method = form.method;

    formData.forEach((value, key) => {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = value;
      tempForm.appendChild(hiddenField);
    });

    document.body.appendChild(tempForm);
    tempForm.submit();
  };

  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <h1>Hafa Samband</h1>
        <p>Sendu okkur fyrirspurnir hér og við svörum við fyrsta tækifæri</p>
      </div>
      <div className='input-areas'>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <input
            className='form-input'
            name='name'
            type='text'
            placeholder='Nafn þitt'
            required
          />
          <input
            className='form-input'
            name='email'
            type='email'
            placeholder='Netfangið þitt'
            required
          />
          <input
            className='form-input'
            name='phone'
            type='text'
            placeholder='Símanúmerið þitt'
            required
          />
          <textarea
            className='form-input'
            name='message'
            placeholder='Fyrirspurn'
            rows='4'
            required
          />
          <input type="text" name="honeypot" style={{ display: 'none' }} />
          <input type="hidden" name="accessKey" value="cc6f1e81-0dd9-482f-8059-556c245779c6" />
          <input type="hidden" name="subject" value="Fyrirspurn frá etomasson.is" />
          <input type="hidden" name="replyTo" value="emilalfredsson@hotmail.com" />
          <input type="hidden" name="redirectTo" value={`${window.location.origin}/thankyou`} />
          <input className="btn btn--outline btn--medium" type="submit" value="Senda" />
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
