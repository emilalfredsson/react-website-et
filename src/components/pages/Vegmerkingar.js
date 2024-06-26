import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Animations.css';
import VegmerkingarSection from '../VegmerkingarSection';
import Vegmerkingar from '../Vegmerkingar';
import Footer from '../Footer';

function VegmerkingarFunction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`page-container ${isVisible ? 'fade-in' : ''}`}>
      <VegmerkingarSection />
      <Vegmerkingar />
      <Footer />
    </div>
  );
}

export default VegmerkingarFunction;
