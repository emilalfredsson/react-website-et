import React, { useEffect } from 'react';
import './Vegleidarar.css';

function Vegleidarar() {
  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        const images = document.querySelectorAll('.vegleidarar__image');
        images.forEach(image => {
          const rect = image.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            image.classList.add('fade-in');
          }
        });
      }, 100); // Adjust the delay as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='vegleidarar'>
      <div className='vegleidarar__box'>
        <p className='vegleidarar__content'>
          Snjómokstursgerður vegleiðari í steypujárnshlíf sem tryggir ekki aðeins framúrskarandi sýnileika á veginum, heldur er hann líka einstaklega endingargóður og veðurheldur.
        </p>
        <p className='vegleidarar__content'>
          Þessi vegleiðari er með skiptaneg endurskinsmerki og einstaka lögun sem tryggir auðvelt viðhald og aukið viðnám gegn skemmdum. Þetta skilar sér í langtímavörn endurskinsmerkisins gegn skemmdum af völdum ökutækja og annarra áhrifa.
        </p>
        <p className='vegleidarar__content'>
          Vegleiðarinn er hannaður með notagildi og endingu í huga, sem gerir hann að kjörnum kosti fyrir allar tegundir vega, hvort sem um er að ræða aðalbrautir eða minni sveitavegi.
        </p>
        <p className='vegleidarar__content'>
          Við vinnum náið með viðskiptavinum okkar til að tryggja að allar þeirra þarfir séu uppfylltar, og bjóðum upp á sérsniðnar lausnir fyrir hvert verkefni. Þannig tryggjum við að vegleiðarinn okkar sé ekki bara hluti af veginum, heldur lykilatriði í öryggi og endingu vegakerfisins.
        </p>
      </div>
      <div className='vegleidarar__images'>
        <img src='images/et-images/thumbnail_IMG_8968.jpg' alt="vegleidararImage1" className='vegleidarar__image' />
        <img src='images/et-images/thumbnail_IMG_9038.jpg' alt="vegleidararImage2" className='vegleidarar__image' />
        <img src='images/et-images/IMG_2671.jpg' alt="vegleidararImage3" className='vegleidarar__image' />
      </div>
    </div>
  );
}

export default Vegleidarar;
