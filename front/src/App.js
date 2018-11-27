import React, { Component } from 'react';
import './App.css';
import Accueil from './components/Accueil'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
        <Route exact path="/" component={Accueil}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

