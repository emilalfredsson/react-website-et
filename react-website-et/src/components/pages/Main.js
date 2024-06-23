import React, { useEffect, useState } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import './Animations.css';

function Main() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`fade-in ${isMounted ? 'active' : ''}`}>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Main;
