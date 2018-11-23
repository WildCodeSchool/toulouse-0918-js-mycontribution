import React, { Component } from 'react';
import './App.css';
import Accueil from './components/Accueil'
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Accueil />
        <Footer />
      </div>
    );
  }
}

export default App;

