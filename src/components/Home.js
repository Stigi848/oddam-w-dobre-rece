import React from 'react';
import Header from './Header';
import About from './About';
import Fundations from './Fundation';
import Contact from './Contact';
import YellowBar from './YellowBar';
import FourSteps from './FourSteps';


const Home = () => (
    <main>
            <Header />
            <YellowBar />
            <FourSteps />
            <About />
            <Fundations />
            <Contact />
          </main>
)

export default Home;