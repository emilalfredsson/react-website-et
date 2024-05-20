import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const images = [
  'images/et-images/IMG_1108.jpeg',
  'images/et-images/IMG_1208.jpg',
  'images/et-images/IMG_1097.jpeg',
  'images/et-images/IMG_2671.jpg'
];

const textContent = [
  { heading: 'Bílastæða- og vegmerkingar', subheading: 'Hvort sem um er að ræða bílastæði hjá innkeyrslunni eða heilt bæjarfélag, þá búum við yfir fullkomnasta tækjakosti sem fáanlegur er til að skila af okkur fullkomnu verki. Málningin sem við notumst við er samþykkt af Vegagerðinni, og er víðast hvar notuð í Evrópu.' },
  { heading: 'Stöðvunar Dregill', subheading: 'Byltingarkennd lausn sem eykur umferðaröryggi verulega. Það styttir stöðvunarvegalengd ökutækis um allt að 30% við erfiðar veðuraðstæður. Hæfni þess til að aðlaga sig að mismunandi gerðum landslags gerir Dregilinn áreiðanlegan, sérstaklega í kringum gangbrautir. Það er því fjárfesting í öruggum vegum framtíðarinna.' },
  { heading: 'Gangbrautarkerfi', subheading: 'Þökk sé hreyfiskynjurum, stillir tækið sjálfkrafa birtustig lýsingarinnar á ljósastaurum, það kviknar aðeins af fullum krafti þegar gangandi vegfarandi er við gangbraut. Bæði eykur það sýnileika og sparar orku kostnað um leið. Hægt er að stækka þessa lausn með samstilltum led ljósum sem beina í átt að ökumanni, einnig hægt að bæta við hljóðum, eftirliti osfrv.' },
  { heading: 'Vegleiðari', subheading: 'Snjómokstursgerður vegleiðari í steypujárnshlíf sem tryggir ekki aðeins framúrskarandi sýnileika á veginum, heldur er hann líka einstaklega endingargóður og veðurheldur. Skiptanleg endurskinsmerki og lögun þess tryggja auðvelt viðhald og aukið viðnám gegn skemmdum, sem skilar sér í langtímavörn endurskinsmerkisins gegn skemmdum af völdum ökutækja.' }
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeText, setFadeText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeText(false); // Start fading out the text
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeText(true); // Fade in the text after changing the image
      }, 500); // Wait for the text to fade out before changing the image
    }, 10000); // Change image and text every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='hero-container'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`hero-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
      <div className={`hero-text-container ${fadeText ? 'active' : 'inactive'}`}>
        <div className="hero-text">
          <h1 className="hero-heading">{textContent[currentIndex].heading}</h1>
          <p className="hero-subheading">{textContent[currentIndex].subheading}</p>
        </div>
      </div>
      <div className="hero-btns">
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          HAFA SAMBAND
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;