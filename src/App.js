import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import AffiliateShare from './components/Affiliate-Share/Affiliate-Share';
import Application from './components/Application/Application';
import BackgroundCheck from './components/Background-Check/Background';
import SpecialEvent from './components/Event/Event';
import Waivers from './components/Waivers/Waivers';
import Admin from './components/Admin/Admin';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/affiliateshare' component={AffiliateShare} />
            <Route path='/application' component={Application} />
            <Route path='/backgroundcheck' component={BackgroundCheck} />
            <Route path='/specialevent' component={SpecialEvent} />
            <Route path='/waivers' component={Waivers} />
            <Route path='/admin' component={Admin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
