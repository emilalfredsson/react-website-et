import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Animations.css';
import ThankyouSection from '../ThankyouSection';
import Footer from '../Footer';

function ThankyouFunction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`page-container ${isVisible ? 'fade-in' : ''}`}>
      <ThankyouSection />
      <Footer />
    </div>
  );
}

export default ThankyouFunction;
