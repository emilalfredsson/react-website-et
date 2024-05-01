import React from 'react'
import '../App.css';
import './SafetySection.css';


function SafetySection() {
    return (
      <div className='safety'>
        <div className='safety-container'>
            <h1>Öryggisþættir</h1>
            <p>Við bjóðum upp á sérstakar vörur fyrir aukið öryggi</p>
      </div>
      <div className='safety__content'>
      <div className='safety__box'>
            <h1 className='safety__header'>Hjá E Tómassyni leggjum við mikið upp úr framúrskarandi þjónustu og öryggi</h1> 
            <h2 className='safety__text'>Við bjóðum upp á ýsmar vörur sem hafa ekki áður sést hér á landi. Þetta eru einstakar vörur frá Euroasfalt sem taka mið af nýsköpun, auknu öryggi vegfarenda, og stuðla að skilvirkari borgarrýmum sem passa inn í samhengi og þróun snjallborga (Smart City)</h2>
        </div>
      <div className='safety-content'>
        <ol className = 'safety-list'>
                    <li className ='safety-item_1' id = 'safety-item'>
                        <h3>Active Light Euroasfalt (ALE)</h3>
                        <p>Virk lýsing er lausn sem eykur öryggi á gangbrautum. Þökk sé hreyfiskynjurum, stillir tækið sjáfkrafa birtustig lýsingarinnar - það kviknar aðeins af fullum krafti þegar gangandi vegfarandi er við gangbraut, eykur sýnileika og sparar orku um leið. Virk ALE lýsing tryggir bestu lýsingu í öllum aðstæðum.</p>
                        <i class="fa-solid fa-file-pdf"></i>
                        <a href="/PDFs/Active-Light-ALE_is.pdf" target="_blank"> Active Light Euroasfalt (ALE)</a>
                     </li>
                    <li className ='safety-item_2' id = 'safety-item'>
                        <h3>Anti-slip surfacing ASE System</h3>
                        <p>ASE System er byltingarkennd lausn sem eykur umferðaröryggi verulega. Það styttir stöðvunarvegalengd ökutækis um allt að 30% við erfiðar veðuraðstæður. Hæfni þess til að aðlaga sig að mismunandi gerðum landslags gerir ASE System áreiðanlegt, sérstaklega í kringum gangbrautir. Það er því fjárfesting í öruggum vegum framtíðarinnar.</p>
                        <i class="fa-solid fa-file-pdf"></i>
                        <a href="/PDFs/ASE-system_is.pdf" target="_blank"> Anti-slip surfacing ASE System</a>
                    </li>
                    <li className ='safety-item_3' id = 'safety-item'>
                        <h3>Endurskins vegleiðari - S-2 NP</h3>
                        <p>S-2 NP er vegleiðari í steypujárnshlíf sem tryggir ekki aðeins framúrskarandi sýnileika á veginum, heldur er hann líka einstaklega endingargóður og veðurheldur. Skiptanleg endurskinsmerki og lögun þess tryggja auðvelt viðhald og aukið viðnám gegn skemmdum, sem skilar sér í langtímavörn endurskinsmerkisins.</p>
                        <i class="fa-solid fa-file-pdf"></i>
                        <a href="/PDFs/S-2-NP_is.pdf" target="_blank"> Endurskins vegleiðari - S-2 NP</a>
                    </li>
                    <li className ='safety-item_4' id = 'safety-item'>
                        <h3>SmartPass</h3>
                        <p>SmartPass er snjall gangbrautarkerfi sem upplýsir ökumenn um viðveru gangandi vegfarenda við gatnamót með því að blikka samstilltum LED ljósum að ökumanni. Hægt er að stækka þessa lausn með viðbótareiningum: t.d. hljóð, eftirlit osfrv. SmartPass bætir á áhrífaríkan hátt aðstæður almenningssamgangna, dregur úr slysum og styttir biðtíma gangandi vegfarenda, sem stuðlar að öruggarai og skilvirkari borgarrýmum.</p>
                        <i class="fa-solid fa-file-pdf"></i>
                        <a href="/PDFs/SmartPass_is.pdf" target="_blank"> SmartPass</a>
                    </li>
                </ol>
      </div>
    </div>
  </div>
    
  )
}

export default SafetySection
