import React from 'react';
import './Cards.css';

function Cards() {
  // Example logo data
  const logos = [
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/orkan.png` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/vinbudin.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/lyfjaval.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/Skeljungur_logo.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/extra.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/Landsbankinn.png` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/ksi.png` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/hopp.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/logoflex.png` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/Snaefellsbaer.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/logreglan.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/Pósturinn.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/ua.png` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/Akureyri.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/logo_samherji.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/icelandair.svg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/holdur.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/kristjans.png` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/heimstaden.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/bmvalla.png` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/felagsbustadir.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/flugger.jpg` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/greifinn.png` },
    { src: `${process.env.PUBLIC_URL}/images/et-images/customers/taekni.png` }
];

  return (
    <div className='cards'>
        <div className='cards__box'>
            <h1 className='cards__header'>
              E Tómasson er rótgróið fjölskyldu fyrirtæki sem hefur verið starfandi í yfir 20 ár. <br/> <br/> 
              Fyrirtækið býr yfir fullkomnum vélakosti og þrautreyndum starfsmönnum sem tryggir viðskiptavinum fyrirtækisins ávallt fullkomin gæði.
            </h1> 
        </div>
        <div className="cards__container">
            <div className='cards__text'>
                <h2>Meðal ánægðara viðskiptavina fyrirtækisins</h2>
            </div>
            <div className='cards__logo-section'>
            <div className='cards__logo-grid'>
              {logos.map((logo, index) => (
                <a key={index} href={logo.url} target="_blank" rel="noopener noreferrer" className='cards__logo-item'>
                  <img src={logo.src} alt={`Logo ${index + 1}`} />
                </a>
              ))}
            </div>
            </div>   
            {/* <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                     src ="images/et-images/IMG_0954-2.jpeg"
                     text ="Við bjóðum upp á margskonar þjónustur, allt við hæfi allra, og við ábyrgjumst gæðaverk"
                     label='Þjónustur'
                     path='/services'
                    />
                    <CardItem 
                     src ="images/et-images/smartpass.PNG"
                     text ="Við bjóðum upp á öryggisþætti sem hafa ekki áður sést hér á landi"
                     label='Öryggisþættir'
                     path='/safety'
                    />
                </ul>
            </div> */}
        </div>   
    </div>
  );
}

export default Cards;