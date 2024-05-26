import React from 'react';
import '../App.css';
import './ServiceItems.css';

const services = [
  {
    header: 'Bílastæða- og vegmerkingar',
    text: 'Hvort sem um er að ræða bílastæði hjá innkeyrslunni eða heilt bæjarfélag, þá búum við yfir einum besta tækjakosti sem fáanlegur er til að skila af okkur fullkomnu verki. Málningin sem við notumst við er samþykkt af Vegagerðinni, og er víðast hvar notuð í Evrópu.',
    image: 'images/et-images/IMG_1097.jpeg',
  },
  {
    header: 'Vegleiðarar',
    text: 'Snjómokstursgerður vegleiðari í steypujárnshlíf sem tryggir ekki aðeins framúrskarandi sýnileiki á veginum, heldur er hann líka einstaklega endingargóður og veðurheldur. Skiptaneg endurskinsmerki og lögun þess tryggja auðvelt viðhald og aukið viðnám gegn skemmdum, sem skilar sér í langtímavörn endurskinsmerkisins gegn skemmdum af völdum ökutækja.',
    image: 'images/et-images/IMG_2671.jpg',
  },
  {
    header: 'Stöðvunar Dreglar',
    text: 'Byltingarkennd lausn sem eykur umferðaröryggi verulega. Það styttir stöðvunarvegalengd ökutækis um allt að 30% við erfiðar veðuraðstæður. Hæfni þess til að aðlaga sig að mismunandi gerðum landslags gerir Dregilinn áreiðanlegan, sérstaklega í kringum gangbrautir. Það er því fjárfesting í öruggum vegum framtíðarinna.',
    image: 'images/et-images/IMG_1208.jpg',
  },
  {
    header: 'Gangbrautarkerfi',
    text: 'Þökk sé hreyfiskynjurum, stillir tækið sjálfkrafa birtustig lýsingarinnar á ljósastaurum, það kviknar aðeins af fullum krafti þegar gangandi vegfarandi er við gangbraut. Bæði eykur það sýnileika og sparar orku kostnað um leið. Hægt er að stækka þessa lausn með samstilltum led ljósum sem beina í átt að ökumanni, einnig hægt að bæta við hljóðum, eftirliti osfrv.',
    image: 'images/et-images/smartpass.PNG',
  },
];

function ServiceItems() {
  return (
    <div className='service__content'>
      <div className='service__box'>
        <h1 className='service__header'>Hjá E Tómassyni leggjum við mikið upp úr framúrskarandi þjónustu og öryggi</h1>
        <h2 className='service__text'>Við bjóðum upp á ýsmar vörur sem hafa ekki áður sést hér á landi. Þetta eru einstakar vörur frá Euroasfalt sem taka mið af nýsköpun, auknu öryggi vegfarenda, og stuðla að skilvirkari borgarrýmum sem passa inn í samhengi og þróun snjallborga (Smart City)</h2>
      </div>

      <div className='service-section'>
        {services.map((service, index) => (
          <div className={`service-segment ${index % 2 === 0 ? 'image-right' : 'image-left'}`} key={index}>
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
            <p>Virk lýsing er lausn sem eykur öryggi á gangbrautum. Þökk sé hreyfiskynjurum, stillir tækið sjáfkrafa birtustig lýsingarinnar - það kviknar aðeins af fullum krafti þegar gangandi vegfarandi er við gangbraut, eykur sýnileika og sparar orku um leið. Virk ALE lýsing tryggir bestu lýsingu í öllum aðstæðum.</p>
            <i className="fa-solid fa-file-pdf"></i>
            <a href="/PDFs/Active-Light-ALE_is.pdf" target="_blank"> Active Light Euroasfalt (ALE)</a>
          </li>
          <li className='service-item_2' id='service-item'>
            <h3>Anti-slip surfacing ASE System</h3>
            <p>ASE System er byltingarkennd lausn sem eykur umferðaröryggi verulega. Það styttir stöðvunarvegalengd ökutækis um allt að 30% við erfiðar veðuraðstæður. Hæfni þess til að aðlaga sig að mismunandi gerðum landslags gerir ASE System áreiðanlegt, sérstaklega í kringum gangbrautir. Það er því fjárfesting í öruggum vegum framtíðarinnar.</p>
            <i className="fa-solid fa-file-pdf"></i>
            <a href="/PDFs/ASE-system_is.pdf" target="_blank"> Anti-slip surfacing ASE System</a>
          </li>
          <li className='service-item_3' id='service-item'>
            <h3>Endurskins vegleiðari - S-2 NP</h3>
            <p>S-2 NP er vegleiðari í steypujárnshlíf sem tryggir ekki aðeins framúrskarandi sýnileika á veginum, heldur er hann líka einstaklega endingargóður og veðurheldur. Skiptanleg endurskinsmerki og lögun þess tryggja auðvelt viðhald og aukið viðnám gegn skemmdum, sem skilar sér í langtímavörn endurskinsmerkisins.</p>
            <i className="fa-solid fa-file-pdf"></i>
            <a href="/PDFs/S-2-NP_is.pdf" target="_blank"> Endurskins vegleiðari - S-2 NP</a>
          </li>
          <li className='service-item_4' id='service-item'>
            <h3>SmartPass</h3>
            <p>SmartPass er snjall gangbrautarkerfi sem upplýsir ökumenn um viðveru gangandi vegfarenda við gatnamót með því að blikka samstilltum LED ljósum að ökumanni. Hægt er að stækka þessa lausn með viðbótareiningum: t.d. hljóð, eftirlit osfrv. SmartPass bætir á áhrífaríkan hátt aðstæður almenningssamgangna, dregur úr slysum og styttir biðtíma gangandi vegfarenda, sem stuðlar að öruggarai og skilvirkari borgarrýmum.</p>
            <i className="fa-solid fa-file-pdf"></i>
            <a href="/PDFs/SmartPass_is.pdf" target="_blank"> SmartPass</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default ServiceItems;
