import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Profil from './components/Profil/Profil'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
          <Profil/>
        <Footer />
      </div>
    );
  }
}

export default App;

