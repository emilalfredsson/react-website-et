import React, { useEffect, useState } from 'react';
import '../../App.css'; // Ensure App.css is imported if needed
import SafetySection from '../SafetySection';
import ServiceItems from '../ServiceItems';
import Footer from '../Footer';
import './Animations.css';

function Safety() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Set visibility to true when component mounts
  }, []);

  return (
    <div className={`page-container ${isVisible ? 'fade-in' : ''}`}>
      <SafetySection />
      <ServiceItems />
      <Footer />
    </div>
  );
}

export default Safety;
