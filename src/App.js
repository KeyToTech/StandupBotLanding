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
import ContactUs from './section-contact-us/ContactUs';
import Question from './question-section/Question';
import Footer from './footer/Footer.js';

class App extends Component {

  style = {
    Text: {
      title: {
        height: '91px',
        width: '80%',
        color: '#494949',
        fontFamily: 'Poppins',
        fontSize: 'calc(25px + (36 - 25) * ((100vw - 768px) / (1900 - 768)))',
        fontWeight: '700',
        lineHeight: '54px',
      },
      description: {
        width: '100%',
        color: '#757575',
        fontFamily: 'Lato',
        fontSize: 'calc(12px + (16 - 12) * ((100vw - 768px) / (1900 - 768)))',
        fontWeight: '400',
        lineHeight: '30px',
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Feature />
        <AboutCt style={this.style} />
        <AboutMg />
        <FeatoreApp style={this.style} />
        <Testimonial />
        <Video />
        <Pricing style={this.style} />
        <Team style={this.style} />
        <ContactUs style={this.style} />
        {/* <Question />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
