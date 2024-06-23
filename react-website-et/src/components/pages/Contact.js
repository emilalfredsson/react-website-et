import React, { useEffect, useState } from 'react';
import './Animations.css';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`fade-in ${isMounted ? 'active' : ''}`}>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Contact;
