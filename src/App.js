import React, { Component } from 'react';
import './App.css';
import Header from './header/Header.js';
import Feature from './feature/Feature.js';
import AboutCt from './about-connect/About.js';
import AboutMg from './section-manage/About.js';
import FeatoreApp from './feature_app/FeatureApp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Feature />
        <AboutCt />
        <AboutMg />
        <FeatoreApp />
      </div>
    );
  }
}

export default App;
