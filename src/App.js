import React, { Component } from 'react';

import ICOTable from './components/containers/ICOTable'
import './App.css'

class App extends Component {
  render() {
    return ( 
        <div className="App"> 
          <ICOTable length={30} /> 
        </div>     
    );
  }
}

export default App;
