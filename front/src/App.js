import React, { Component } from 'react';
import './App.css';
import Accueil from './components/Accueil'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Profil from './components/Profil/Profil'
import ProjectListContainer from './containers/ProjectListContainer';

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
        </Switch>
        <ProjectListContainer />
        <Profil/>
        <Footer />
      </div>
    );
  }
}

export default App;

