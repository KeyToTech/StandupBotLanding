import React, { Component } from 'react';
import './App.css';
import Header from './header/Header.js';
import Feature from './feature/Feature.js';
import AboutCt from './about-connect/About.js';
import AboutMg from './section-manage/About.js';
import FeatoreApp from './feature_app/FeatureApp.js';
import Testimonial from './testimonial/Testimonial.js';
import Video from './section-video/Video.js';
import Pricing from './section-pricing/Pricing.js';
import Team from './section-team/Team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Feature />
        <AboutCt />
        <AboutMg />
        <FeatoreApp />
        <Testimonial />
        <Video />
        <Pricing />
        <Team />
      </div>
    );
  }
}

export default App;
