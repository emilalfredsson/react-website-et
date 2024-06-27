import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './ServiceItems.css';

const services = [
  {
    header: 'Bílastæða- og vegmerkingar',
    text: 'Hvort sem um er að ræða bílastæði hjá innkeyrslunni eða heilt bæjarfélag, þá búum við yfir einum besta tækjakosti sem fáanlegur er til að skila af okkur fullkomnu verki. Málningin sem við notumst við er samþykkt af Vegagerðinni, og er víðast hvar notuð í Evrópu.',
    image: `${process.env.PUBLIC_URL}/images/et-images/IMG_1097.jpeg`,
    link: '/vegmerkingar'
  },
  {
    header: 'Vegleiðarar',
    text: 'Snjómokstursgerður vegleiðari í steypujárnshlíf sem tryggir ekki aðeins framúrskarandi sýnileika á veginum, heldur er hann líka einstaklega endingargóður og veðurheldur. Skiptanleg endurskinsmerki og lögun þess tryggja auðvelt viðhald og aukið viðnám gegn skemmdum, sem skilar sér í langtímavörn endurskinsmerkisins gegn skemmdum af völdum ökutækja.',
    image: `${process.env.PUBLIC_URL}/images/et-images/IMG_2671.jpg`,
    link: '/vegleidarar'
  },
  {
    header: 'Stöðvunar Dreglar',
    text: 'Byltingarkennd lausn sem eykur umferðaröryggi verulega. Það styttir stöðvunarvegalengd ökutækis um allt að 30% við erfiðar veðuraðstæður. Hæfni þess til að aðlaga sig að mismunandi gerðum landslags gerir Dregilinn áreiðanlegan, sérstaklega í kringum gangbrautir. Það er því fjárfesting í öruggum vegum framtíðarinna.',
    image: `${process.env.PUBLIC_URL}/images/et-images/IMG_1208.jpg`,
    link: '/stodvunardreglar'
  },
  {
    header: 'Gangbrautarkerfi',
    text: 'Þökk sé hreyfiskynjurum, stillir tækið sjálfkrafa birtustig lýsingarinnar á ljósastaurum, það kviknar aðeins af fullum krafti þegar gangandi vegfarandi er við gangbraut. Bæði eykur það sýnileika og sparar orku kostnað um leið. Hægt er að stækka þessa lausn með samstilltum led ljósum sem beina í átt að ökumanni, einnig hægt að bæta við hljóðum, eftirliti osfrv.',
    image: `${process.env.PUBLIC_URL}/images/et-images/smartpass.png`,
    link: '/gangbrautarkerfi'
  },
];

const ServiceItems = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.service-segment');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight) {
          element.classList.add('loaded');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    navigate(link);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className='service__content'>
      <div className='service__box'>
        <h1 className='service__header'>Hjá E Tómassoni leggjum við mikið upp úr framúrskarandi þjónustu og öryggi</h1>
        <h2 className='service__text'>Við bjóðum upp á ýsmar vörur sem hafa ekki áður sést hér á landi. Þetta eru einstakar vörur frá Euroasfalt sem taka mið af nýsköpun, auknu öryggi vegfarenda, og stuðla að skilvirkari borgarrýmum sem passa inn í samhengi og þróun snjallborga (Smart City)</h2>
      </div>

      <div className='service-section'>
        {services.map((service, index) => (
          <div
            className={`service-segment ${index % 2 === 0 ? 'image-right' : 'image-left'}`}
            key={index}
            onClick={() => handleLinkClick(service.link)}
          >
            <div className='service-text'>
              <h3 className='service-header'>{service.header}</h3>
              <p className='service-description'>{service.text}</p>
            </div>
            <div className='service-image'>
              <img src={service.image} alt={service.header} />
            </div>
          </div>
        ))}
      </div>

      <div className='service__additional'>
        <h2 className='service__text'>Nánari upplýsingar um tækni sem við bjóðum upp á</h2>
      </div>

      <div className='service-content'>
        <ol className='service-list'>
          <li className='service-item_1' id='service-item'>
            <h3>Active Light Euroasfalt (ALE)</h3>
            <p>Virk lýsing er lausn sem eykur öryggi á gangbrautum. Þökk sé hreyfiskynjurum, stillir tækið sjáfkrafa birtustig lýsingarinnar.</p>
            <i className="fa-solid fa-file-pdf"></i>
            <a href={`${process.env.PUBLIC_URL}/PDFs/Active-Light-ALE_is.pdf`} target="_blank"> Active Light Euroasfalt (ALE)</a>
          </li>
          <li className='service-item_2' id='service-item'>
            <h3>Anti-slip surfacing ASE System</h3>
            <p>ASE System er byltingarkennd lausn sem eykur umferðaröryggi verulega. Það styttir stöðvunarvegalengd ökutækis um allt að 30% við erfiðar veðuraðstæður.</p>
            <i className="fa-solid fa-file-pdf"></i>
            <a href={`${process.env.PUBLIC_URL}/PDFs/ASE-system_is.pdf`} target="_blank"> Anti-slip surfacing ASE System</a>
          </li>
          <li className='service-item_3' id='service-item'>
            <h3>Endurskins vegleiðari - S-2 NP</h3>
            <p>S-2 NP er vegleiðari í steypujárnshlíf sem tryggir ekki aðeins framúrskarandi sýnileika á veginum, heldur er hann líka einstaklega endingargóður og veðurheldur.</p>
            <i className="fa-solid fa-file-pdf"></i>
            <a href={`${process.env.PUBLIC_URL}/PDFs/S-2-NP_is.pdf`} target="_blank"> Endurskins vegleiðari - S-2 NP</a>
          </li>
          <li className='service-item_4' id='service-item'>
            <h3>SmartPass</h3>
            <p>SmartPass er snjall gangbrautarkerfi sem upplýsir ökumenn um viðveru gangandi vegfarenda við gatnamót með því að blikka samstilltum LED ljósum að ökumanni.</p>
            <i className="fa-solid fa-file-pdf"></i>
            <a href={`${process.env.PUBLIC_URL}/PDFs/SmartPass_is.pdf`} target="_blank"> SmartPass</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ServiceItems;
