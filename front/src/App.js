import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Profil from './components/Profil/Profil'
import Accueil from './components/Accueil'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Accueil />
        <Profil/>
        <Footer />
      </div>
    );
  }
}

export default App;

