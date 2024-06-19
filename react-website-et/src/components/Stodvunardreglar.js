import React, { useEffect } from 'react';
import './Stodvunardreglar.css';

function Stodvunardreglar() {
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.stodvunardreglar__image');
      images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          image.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='stodvunardreglar'>
        <div className='stodvunardreglar__box'>
            <p className='stodvunardreglar__content'>
            Byltingarkennd lausn sem eykur umferðaröryggi verulega. Með þessari lausn styttist stöðvunarvegalengd ökutækis um allt að 30% við erfiðar veðuraðstæður, sem er stórt skref í átt að bættu umferðaröryggi og minni slysum á vegum.
            </p>
            <p className='stodvunardreglar__content'>
            Hæfni þess til að aðlaga sig að mismunandi gerðum landslags gerir Dregilinn áreiðanlegan, sérstaklega í kringum gangbrautir og á öðrum hættulegum svæðum. Með því að tryggja stöðugan og öruggan akstur, óháð veðri eða veðurskilyrðum, er Dregillinn ómissandi þáttur í nútíma vegakerfum.
            </p>
            <p className='stodvunardreglar__content'>
            Þessi tækni er fjárfesting í öruggum vegum framtíðarinnar. Lausnin sem við notum er hönnuð af sérfræðingum í öryggismálum og umferðarráðum til að tryggja að hún uppfylli hæstu öryggisstaðla.
            </p>
            <p className='stodvunardreglar__content'>
            Við erum stolt af því að geta boðið upp á þessa nýsköpun og tækniframfarir sem Dregillinn stendur fyrir. Með þessari byltingarkenndu lausn tryggjum við ekki aðeins öryggi vegfarenda heldur einnig langtíma ávinning fyrir samfélagið í heild. Við leggjum okkur fram um að bæta og þróa þjónustu okkar til að tryggja að hún sé ávallt í fararbroddi hvað varðar öryggi og nýsköpun. Með Dreglinum erum við að leggja grunn að öruggari og betri vegum fyrir komandi kynslóðir.
            </p> 
        </div>
        <div className='stodvunardreglar__images'>
            <img src='images/Screenshot 2024-06-19 214458.png' alt="stodvunardreglarImage1" className='stodvunardreglar__image'/>
            <img src='images/Screenshot 2024-06-19 214546.png' alt="stodvunardreglarImage3" className='stodvunardreglar__image'/>
            <img src='images/et-images/IMG_1208.jpg' alt="stodvunardreglarImage2" className='stodvunardreglar__image'/>
        </div>
    </div>
  );
}

export default Stodvunardreglar;
