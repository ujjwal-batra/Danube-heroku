import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Home from './Home';
import Course from './Coursepage'

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={props => (
        <Home />
      )}/>

      <Route path="/course" exact render={props => (
        <Course />
      )}/>
    </div>
  );
}

export default App;
