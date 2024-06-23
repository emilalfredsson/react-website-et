import React, { useEffect, useState } from 'react';
import '../../App.css';
import GangbrautarkerfiSection from '../GangbrautarkerfiSection';
import Gangbrautarkerfi from '../Gangbrautarkerfi';
import Footer from '../Footer';
import './Animations.css';

function GangbrautarkerfiFunction() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`fade-in ${isMounted ? 'active' : ''}`}>
      <GangbrautarkerfiSection />
      <Gangbrautarkerfi />
      <Footer />
    </div>
  );
}

export default GangbrautarkerfiFunction;
