import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Animations.css';
import StodvunardreglarSection from '../StodvunardreglarSection';
import Stodvunardreglar from '../Stodvunardreglar';
import Footer from '../Footer';

function StodvunardreglarFunction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`page-container ${isVisible ? 'fade-in' : ''}`}>
      <StodvunardreglarSection />
      <Stodvunardreglar />
      <Footer />
    </div>
  );
}

export default StodvunardreglarFunction;
