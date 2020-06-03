import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (  
        
        <nav className='topNavigation'>
            <ul>
           
                <li>
                    <NavLink to=''>Start</NavLink>
                </li>
                <li>
                    <NavLink to='Header'>O co chodzi?</NavLink>
                </li>
                <li>
                    <NavLink to='About'>O nas</NavLink>
                </li>
                <li>
                    <NavLink to = 'Fundations'>Fundacje</NavLink>
                </li>
                <li>
                    <NavLink to = 'Contact'>Kontakt</NavLink>
                </li>
            </ul>
        </nav>
      
     );
}
 
export default Nav;