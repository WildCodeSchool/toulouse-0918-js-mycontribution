import React, { Component } from 'react';
import './App.css';
import Accueil from './components/Accueil';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Ecosysteme from './components/Ecosysteme';
import { Route, Switch } from 'react-router-dom';
import ProjectListContainer from './containers/ProjectListContainer';
import EvenementsListContainer from './containers/EvenementsListContainer';
import ContributeursListContainer from './containers/ContributeursListContainer';
import ProfilListContainer from './containers/ProfilListContainer';
import SingleProjectContainer from './containers/SingleProjectContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Accueil}></Route>
          <Route path="/evenements" component={EvenementsListContainer}></Route>
          <Route exact path="/initiative" component={ProjectListContainer}></Route>
          <Route exact path="/mission" component={ProjectListContainer}></Route>
          <Route path="/mission/:id" component={SingleProjectContainer}></Route>
          <Route path="/initiative/:id" component={SingleProjectContainer}></Route>
          <Route path="/profil/:id/favorite" component={ProfilListContainer}></Route>
          <Route path="/profil/:id/mission" component={ProfilListContainer}></Route>
          <Route path="/profil/:id/initiative" component={ProfilListContainer}></Route>
          <Route path="/users" component={ContributeursListContainer}></Route>
          <Route path="/ecosysteme" component={Ecosysteme}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

