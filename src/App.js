import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Newsitems from "./components/Newsitems";
import { store } from './components/Navbar';

import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import { Component } from 'react';

const App =(props)=> {
  const pageSize=6;
  const apikey='cac09bfb1bcd44349de3d0f0b6f6181c';
  const country='in';

      return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/"><News key="1" pageSize={pageSize} country={country} apikey={apikey} category="general" /></Route>
        <Route exact path="/business"><News key="2" pageSize={pageSize} country={country} apikey={apikey} category="business"/></Route>
        <Route exact path="/entertainment"><News key="3" pageSize={pageSize} country={country} apikey={apikey} category="entertainment"/></Route>
        <Route exact path="/general"><News key="4" pageSize={pageSize} country={country} apikey={apikey} category="general"/></Route>
        <Route exact path="/health"><News key="5" pageSize={pageSize} country={country} apikey={apikey} category="health"/></Route>
        <Route exact path="/science"><News key="6" pageSize={pageSize} country={country} apikey={apikey} category="science"/></Route>
        <Route exact path="/sports"><News key="7" pageSize={pageSize} country={country} apikey={apikey} category="sports"/></Route>
        <Route exact path="/technology"><News key="8" pageSize={pageSize} country={country} apikey={apikey} category="technology"/></Route>
        {/* key can be anything but not same*/}
        </Switch>
        </Router>
      </div>
      )
}

export default App;

