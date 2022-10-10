
import React, { Component } from 'react';
import './App.css';
import Maincontent from './components/Maincontent';
import Navigation from './components/Navigation';
import Footer from './components/Footer';



class App extends Component {
  render() {
  return (
    <div>
      <Navigation />
      <Maincontent />
      <Footer />
    </div>
  );
  }
}

export default App;
