import React, { Component } from 'react';
import './App.css';
import Header from './header/Header.js';
import Feature from './feature/Feature.js';
import AboutCt from './about-connect/About.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Feature />
        <AboutCt />

      </div>
    );
  }
}

export default App;
