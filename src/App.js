import React from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Nav from './components/Nav';
import Home from './components/Home';
import GiveForm from './components/GiveForm';
import Log from './components/Log';
import Registration from './components/Registration';





class App extends React.Component {
  render() {
    return (
     
      <Router>
        <div className='app'>
          <header>
            <Nav className='menu' />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path='/log' exact component={Log} />
            <Route path='/registration' component={Registration} />
            <Route path='/GiveForm' component={GiveForm} />
            
          </Switch>
          

        </div>
        </Router>
    );
  }
}

export default App;
