import React, { useEffect } from 'react';
import './Gangbrautarkerfi.css';

function Gangbrautarkerfi() {
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.gangbrautarkerfi__image');
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
    <div className='gangbrautarkerfi'>
        <div className='gangbrautarkerfi__box'>
            <p className='gangbrautarkerfi__content'>
            Þökk sé hreyfiskynjurum, stillir tækið sjálfkrafa birtustig lýsingarinnar á ljósastaurum, þannig að það kviknar aðeins af fullum krafti þegar gangandi vegfarandi er við gangbraut. Þessi nýstárlega tækni eykur bæði sýnileika og sparar orku kostnað um leið, sem stuðlar að bæði öryggi og hagkvæmni.
            </p>
            <p className='gangbrautarkerfi__content'>
            Lýsingarkerfið er sveigjanlegt og hægt er að stækka þessa lausn með samstilltum LED ljósum sem beina í átt að ökumanni, sem tryggir að bæði gangandi vegfarendur og ökumenn fái hámarks sýnileika á mikilvægum stöðum. Auk þess er hægt að bæta við hljóðmerkjum og eftirlitskerfum til að auka öryggið enn frekar og bjóða upp á heildstæðari lausnir fyrir umferðarsvæði.
            </p>
            <p className='gangbrautarkerfi__content'>
            Við erum stolt af því að geta boðið upp á þessa háþróuðu tækni, sem ekki aðeins bætir umferðaröryggi heldur stuðlar einnig að sjálfbærri orkunotkun. Þessi lausn er tilvalin fyrir hvers kyns umhverfi, hvort sem það eru þéttbýlissvæði, skólasvæði eða önnur svæði þar sem mikil umferð er.
            </p>
            <p className='gangbrautarkerfi__content'>
            Með því að nýta þessa tækni, vinnum við að því að skapa öruggari og skilvirkari umferðarkerfi. Við leggjum okkur fram um að fylgjast með nýjungum á sviði lýsingar og öryggis og tryggja að viðskiptavinir okkar fái alltaf bestu mögulegu lausnirnar. Með þessum sveigjanlegu og snjöllu lýsingarkerfum stuðlum við að öruggari, orkusparandi og þægilegri umhverfi fyrir alla vegfarendur.
            </p> 
        </div>
        <div className='gangbrautarkerfi__images'>
            <img src='images/Screenshot 2024-06-19 220035.png' alt="gangbrautarkerfiImage1" className='gangbrautarkerfi__image'/>
            <img src='images/Screenshot 2024-06-19 220204.png' alt="gangbrautarkerfiImage3" className='gangbrautarkerfi__image'/>
            <img src='images/Screenshot 2024-06-19 220121.png' alt="gangbrautarkerfiImage2" className='gangbrautarkerfi__image'/>
        </div>
    </div>
  );
}

export default Gangbrautarkerfi;
