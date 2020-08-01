import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import CamionTransportador from './components/camionTransportador';
import EstimacionDePI from './components/estimacionDePI';
import Landing from './components/landing';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing}/>
        <div className="container">
          <Route exact path="/camionTransp" component={CamionTransportador} />
          <Route exact path="/estimacionPi" component={EstimacionDePI} />
        </div>
      </div>
    </Router>
  );
}

export default App;
