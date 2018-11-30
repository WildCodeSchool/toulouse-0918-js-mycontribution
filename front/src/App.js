import React, { Component } from 'react';
import './App.css';
import Accueil from './components/Accueil'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Ecosysteme from './components/Ecosysteme';
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
        <Route path="/liste-missions" component={ProjectListContainer}></Route>
        <Route path="/liste-initiatives" component={ProjectListContainer}></Route>
        <Route path="/liste-evenements" component={ProjectListContainer}></Route>
        <Route path="/profil" component={Profil}></Route>
        <Route path="/ecosysteme" component={Ecosysteme}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

