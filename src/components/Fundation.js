import React from 'react';
import img2 from '../assets/assets/Decoration.svg';
const Fundations = () => {
    return (  <div className='Fundation'> 
<h1>Komu Pomagamy</h1>
<img src={img2} />
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 5 }}>
    <div><button className='btnFundation'>Fundacjom</button></div>
    <div><button className='btnFundation'>Organizacjom Pozarządowym</button></div>
    <div><button className='btnFundation'>Lokalnym zbiórkom</button></div>
    
  </div>
  <br/>
  <h6>W naszej bazie,  trala lala lalala lorem ipusm trala lala lalala lorem ipusm  trala lala lalala lorem ipusm</h6>
    </div> );
}
 
export default Fundations;