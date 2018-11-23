import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;

