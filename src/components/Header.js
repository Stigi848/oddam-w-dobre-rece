import React from 'react';
import img1 from '../assets/assets/Home-Hero-Image.jpg';
import img2 from '../assets/assets/Decoration.svg';
const Header = () => {
    return (  
    <div> 
        <h1 className='h1Call'>Zacznij pomagać!{<br/>}
        Oddaj niechciane rzeczy w zaufane ręce</h1>
        
         
        <img src={img1} alt="headerImg" className='headerImg'/> 
        <img src={img2} alt="headerDecoration" className='headerDecoration1'/> 

        <button className='headerBtn1'>Oddaj rzeczy</button>
        <button className='headerBtn2'>Zorganizuj zbiórkę </button>


    </div> );
}

export default Header;