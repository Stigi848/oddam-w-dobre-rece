import React from 'react';
import './scss/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';


import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Fundations from './components/Fundation';
import Contact from './components/Contact';
import YellowBar from './components/YellowBar';
import FourSteps from './components/FourSteps';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <navigation>
            <Nav className='menu' />
          </navigation>
          <main>
            {<Header />}
            <YellowBar />
            <FourSteps />
            {<About />}
            {<Fundations />}
            {<Contact />}
          </main>

        </div>
      </Router>
    );
  }
}

export default App;
