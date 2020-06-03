import React from 'react';
import imgPolo from '../assets/assets/Icon-1.svg';
import imgBag from '../assets/assets/Icon-2.svg';
import imgScope from '../assets/assets/Icon-3.svg';
import imgReturn from '../assets/assets/Icon-4.svg';
import img2 from '../assets/assets/Decoration.svg';

const FourSteps = () => 
<div className='FourSteps'>
<div>
<h1 className= 'h1FourSteps'>Wystarczą 4 proste kroki</h1>
<img src={img2} alt="decoration"/>
</div>

  <div  className='greyBar' style={{ display: "grid", gridTemplateColumns: "repeat(4, 2fr)", gridGap: 50 }}>
<div><img src={imgPolo} alt="polo"/><h3 className='forStepsBorder'>Wybierz rzeczy </h3>
lorem ipsum sivis dolor, ipsum sivis, ipsum sivis</div>

<div><img src={imgBag} alt="bag"/><h3 className='forStepsBorder'>Spakuj je </h3>
lorem ipsum sivis dolor, ipsum sivis, ipsum sivis</div>

<div><img src={imgScope} alt="polo"/><h3 className='forStepsBorder'> Zdecyduj komu chcesz pomóc </h3>
lorem ipsum sivis dolor, ipsum sivis, ipsum sivis</div>

<div><img src={imgReturn} alt="return"/><h3 className='forStepsBorder'>Zamów kuriera </h3>
lorem ipsum sivis dolor, ipsum sivis, ipsum sivis</div>
 </div>

  

 <br/>
 <div>
     <button className= 'btnFourSteps'>ODDAJ RZECZY</button>
 </div>
 </div>
export default FourSteps;