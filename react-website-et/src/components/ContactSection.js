import React, { useState } from 'react';
import './ContactSection.css';
import './Button.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ContactSection() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{7}$/;

    if (!formData.name) {
      newErrors.name = 'Nafn er nauðsynlegt';
    }
    if (!formData.email) {
      newErrors.email = 'Netfang er nauðsynlegt';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Netfang er ekki gilt';
    }
    if (!formData.phone) {
      newErrors.phone = 'Símanúmer er nauðsynlegt';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Símanúmerið þarf að vera 7 tölustafir';
    }
    if (!formData.message) {
      newErrors.message = 'Fyrirspurn er nauðsynleg';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const form = e.target;
      try {
        await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
        });

        // Redirect to thank you page
        navigate('/thankyou');
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error if submission fails
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <h1>Hafa Samband</h1>
        <p>Sendu okkur fyrirspurnir hér og við svörum við fyrsta tækifæri</p>
      </div>
      <div className='input-areas'>
        <form action="https://api.staticforms.xyz/submit" method="post" onSubmit={handleSubmit}>
          <input
            className='form-input'
            name='name'
            type='text'
            placeholder='Nafn þitt'
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
          <input
            className='form-input'
            name='email'
            type='email'
            placeholder='Netfangið þitt'
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
          <input
            className='form-input'
            name='phone'
            type='text'
            placeholder='Símanúmerið þitt'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
          <textarea
            className='form-input'
            name='message'
            placeholder='Fyrirspurn'
            rows='4'
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
          <input type="text" name="honeypot" style={{ display: 'none' }} />
          <input type="hidden" name="accessKey" value="cc6f1e81-0dd9-482f-8059-556c245779c6" />
          <input type="hidden" name="subject" value="Fyrirspurn frá etomasson.is" />
          <input type="hidden" name="replyTo" value="emilalfredsson@hotmail.com" />
          <input type="hidden" name="redirectTo" value="/thankyou" /> {/* Redirect URL */}
          <input className="btn btn--outline btn--medium" type="submit" value="Senda" />
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
