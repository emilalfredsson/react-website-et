import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <div className='cards__box'>
            <h1 className='cards__header'>Hjá E Tómassyni sérhæfum við okkur í bílastæða- og vegmerkingum fyrir fyrirtæki og einstaklinga</h1> 
            <h2 className='cards__text'>E Tómasson er rótgróið fjölskyldu fyrirtæki sem hefur verið starfandi í yfir 20 ár. Fyrirtækið býr yfir fullkomnum vélakosti og þrautreyndum starfsmönnum sem tryggir viðskiptavinum fyrirtækisins ávallt fullkomin gæði.</h2>
        </div>
        <div className="cards__container">
            <div className="cards__wrapper">
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
            </div>
        </div>      
    </div>
  )
}

export default Cards
