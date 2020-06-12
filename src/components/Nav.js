import React from 'react';
import { Link } from 'react-scroll';
import { Link as ReactLink } from 'react-router-dom';

const Nav = () => {

    return (
        <div>
            <div className='loginBar'>
                <ReactLink className='logIn' to="/log">Logowanie</ReactLink>
                <ReactLink className='register' to="/registration">Rejestracja</ReactLink>
            </div>
            

            <nav className='topNavigation'>
                <ReactLink
                    to="/"
                    >Start</ReactLink>

                <Link
                    activeClass="active"
                    to="header"
                    spy={true}
                    duration={500}
                >O co chodzi?</Link>

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    duration={500}
                >O nas</Link>

                <Link
                    activeClass="active"
                    to="fundaction"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                > Fundacje</Link>


                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    duration={500}
                >Kontakt</Link>

            </nav>
        </div>
    );
}

export default Nav;