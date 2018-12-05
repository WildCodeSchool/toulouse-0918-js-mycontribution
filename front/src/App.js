import React, { Component } from 'react';
import './App.css';
import Accueil from './components/Accueil';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Ecosysteme from './components/Ecosysteme';
import { Route, Switch } from 'react-router-dom';
import Profil from './components/Profil/Profil';
import ProjectListContainer from './containers/ProjectListContainer';
import MissionsListContainer from './containers/MissionsListContainer';
import InitiativesListContainer from './containers/InitiativesListContainer';
import ContributeursListContainer from './containers/ContributeursListContainer';
import EvenementsListContainer from './containers/EvenementsListContainer';


class App extends Component {
  constructor(props){
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
          <Route path="/initiatives" component={InitiativesListContainer}></Route>
            <Route path="/missions" component={MissionsListContainer}></Route>
          <Route path="/profil/favoris" component={ProjectListContainer} component={Profil}></Route>
          <Route path="/profil/mission" component={ProjectListContainer} component={Profil}></Route>
          <Route path="/profil/initiative" component={ProjectListContainer} component={Profil}></Route>
          <Route path="/contributeurs" component={ContributeursListContainer}></Route>
          <Route path="/ecosysteme" component={Ecosysteme}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

