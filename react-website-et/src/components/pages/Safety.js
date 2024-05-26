import React from 'react';
import '../../App.css';
import SafetySection from '../SafetySection';
import ServiceItems from '../ServiceItems';
import Footer from '../Footer';

function Safety() {
  return (
    <> 
      <SafetySection />
      <ServiceItems />
      <Footer/>
    </>
  );
}

export default Safety;