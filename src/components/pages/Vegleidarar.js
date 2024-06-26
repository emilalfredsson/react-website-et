import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Animations.css';
import VegleidararSection from '../VegleidararSection';
import Vegleidarar from '../Vegleidarar';
import Footer from '../Footer';

function VegleidararFunction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`page-container ${isVisible ? 'fade-in' : ''}`}>
      <VegleidararSection />
      <Vegleidarar />
      <Footer/>
    </div>
  );
}

export default VegleidararFunction;
