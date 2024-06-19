import React, { useEffect } from 'react';
import './Vegmerkingar.css';

function Vegmerkingar() {
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.vegmerkingar__image');
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
    <div className='vegmerkingar'>
        <div className='vegmerkingar__box'>
            <p className='vegmerkingar__content'>
            Hvort sem um er að ræða bílastæði hjá innkeyrslunni eða heilt bæjarfélag, þá búum við yfir einum besta tækjakosti sem fáanlegur er til að skila af okkur fullkomnu verki. Með margra ára reynslu og sérfræðiþekkingu, tryggjum við að verkefnin séu unnin af alúð og fagmennsku. Við höfum unnið með fjölmörgum fyrirtækjum og sveitarfélögum, sem sýnir traustið sem við höfum áunnið okkur í gegnum tíðina.
            </p>
            <p className='vegmerkingar__content'>
            Málningin sem við notumst við er samþykkt af Vegagerðinni og er víðast hvar notuð í Evrópu, sem tryggir gæði og endingu. Við leggjum okkur fram um að nota aðeins bestu fáanlegu efni og tækni, sem endurspeglast í faglegum frágangi og langvarandi niðurstöðum.
            </p>
            <p className='vegmerkingar__content'>
            Þjónusta okkar felur í sér allt frá merkingu bílastæða til málnings göngustíga og hjólreiðastíga. Við skiljum mikilvægi þess að hafa skýrar og öruggar merkingar, hvort sem um er að ræða almenningssvæði eða einkasvæði. Við vinnum náið með viðskiptavinum okkar til að tryggja að allar þeirra þarfir séu uppfylltar og að verkið sé unnið á sem hagkvæmastan hátt.
            </p>
            <p className='vegmerkingar__content'>
            Við erum stolt af þeirri fagmennsku sem við sýnum í hverju einasta verkefni og tökum ekki verkefni af léttúð. Við leggjum áherslu á að vera í fararbroddi í greininni og fylgjumst stöðugt með nýjungum og þróun. Við bjóðum upp á sérsniðnar lausnir fyrir hvert verkefni, og tökum mið af sérstökum þörfum hvers og eins viðskiptavinar.
            </p> 
        </div>
        <div className='vegmerkingar__images'>
            <img src='images/et-images/IMG_0640.jpeg' alt="vegmerkingarImage3" className='vegmerkingar__image'/>
            <img src='images/et-images/Gangbrautarkerfi.jpg' alt="vegmerkingarImage1" className='vegmerkingar__image'/>
            <img src='images/et-images/IMG_0545.jpeg' alt="vegmerkingarImage2" className='vegmerkingar__image'/>
        </div>
    </div>
  );
}

export default Vegmerkingar;
