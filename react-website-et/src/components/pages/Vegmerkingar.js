import React from 'react';
import '../../App.css';
import VegmerkingarSection from '../VegmerkingarSection';
import Vegmerkingar from '../Vegmerkingar';
import Footer from '../Footer';

function VegmerkingarFunction() {
  return (
    <>  
      <VegmerkingarSection />
      <Vegmerkingar />
      <Footer/>
    </>
  );
}

export default VegmerkingarFunction;