import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Profil from './components/Profil/Profil'
import Accueil from './components/Accueil'
import ProjectListContainer from './containers/ProjectListContainer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Accueil />
        <ProjectListContainer />
        <Profil/>
        <Footer />
      </div>
    );
  }
}

export default App;

