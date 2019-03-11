import React, { Component } from 'react';
import './App.css';
import Header from './header/Header.js';
import Feature from './feature/Feature.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Feature />
        

      </div>
    );
  }
}

export default App;
