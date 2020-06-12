import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import img2 from '../assets/assets/Decoration.svg';
import imgSweter from '../assets/assets/Form-Hero-Image.jpg';
import TeddyBear from '../assets/assets/Background-Form.jpg';
import Contact from './Contact';



const GiveForm = () => {
    return (
        <div className='GiveForm'>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 5 }}>
                <div> <img src={imgSweter} className='GiveFormSweter' /></div>
                <div className='GiveForm2ndBar'>
                    <h1>ODDAJ RZECZY POTRZEBUJĄCYM</h1>
                    <img src={img2} className='img2' />
                    <h3>Wystarczą 4 prose kroki</h3>
                    <div className='GiveFormSqr'> <p>1 <br/> lorem ipsum</p></div>
                    <div className='GiveFormSqr'><p>2 <br/>lorem ipsum</p></div>
                    <div className='GiveFormSqr'><p>3 <br/>lorem ipsum</p></div>
                    <div className='GiveFormSqr'><p>4 <br/>lorem ipsum</p></div>
                    </div>  

                    <div className='GiveFormYellowBar'> <h1>Ważne! </h1><br/><h2>Tylko 60l worki</h2>  </div>

                   <div className='GiveFormFormik'>
                       <input type="checkbox" name="zabawki" id="zabawki"/>zabawki
                       <input type="checkbox" name="ubranka" id="ubranka"/>ubranka
                       <input type="checkbox" name="jedzenie" id="jedzenie"/>jedzenie
                       <input type="checkbox" name="twarde dragi" id="dragi"/>dragi
                   </div>
                   <img src={TeddyBear} className='TeddyBear' />
                   </div>
                   <Contact className='GiveFormContact' />
                 
              
               
             
        </div>

    );
}

export default GiveForm;