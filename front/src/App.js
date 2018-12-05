import React, { Component } from 'react';
import './App.css';
import Accueil from './components/Accueil'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Profil from './components/Profil/Profil'
import ProjectListContainer from './containers/ProjectListContainer';
import MissionsListContainer from './containers/MissionsListContainer';
import InitiativesListContainer from './containers/InitiativesListContainer';
import ContributeursListContainer from './containers/ContributeursListContainer';


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
            <Route path="/evenements" component={ProjectListContainer}></Route>
            <Route path="/initiatives" component={InitiativesListContainer}></Route>
            <Route path="/missions" component={MissionsListContainer}></Route>
            <Route path="/contributeurs" component={ContributeursListContainer}></Route>
            <Route path="/profil" component={Profil}></Route>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

