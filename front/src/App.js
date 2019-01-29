import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Accueil from './components/Accueil';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Ecosysteme from './components/Ecosysteme';
import ProjectListContainer from './containers/ProjectListContainer';
import EvenementsListContainer from './containers/EvenementsListContainer';
import ContributeursListContainer from './containers/ContributeursListContainer';
import ProfilListContainer from './containers/ProfilListContainer';
import SingleProjectContainer from './containers/SingleProjectContainer';
import ProfilUpdateContainer from './containers/ProfilUpdateContainer';
import FormProjectContainer from './containers/FormProjectContainer';
import ContributeurInformation from './components/Contributeurs/ContributeurInformation';
import ProtectedRoute from './components/ProtectedRoute';
import Page404 from './components/Page404';
import ConfirmForm from './components/Formulaires/ConfirmForm'
import PaginatedUsers from './components/Contributeurs/PaginatedUsers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/evenements" component={EvenementsListContainer} />
          <Route exact path="/initiative" component={ProjectListContainer} />
          <Route exact path="/mission" component={ProjectListContainer} />
          <ProtectedRoute path="/mission/:id" component={SingleProjectContainer} />
          <ProtectedRoute path="/initiative/:id" component={SingleProjectContainer} />
          <ProtectedRoute path="/profil/favorite" component={ProfilListContainer} />
          <ProtectedRoute path="/profil/mission" component={ProfilListContainer} />
          <ProtectedRoute path="/profil/initiative" component={ProfilListContainer} />
          <ProtectedRoute path="/profil/update" component={ProfilUpdateContainer} />
          <Route path="/users/:id" component={ContributeurInformation} />
          <Route path="/users" component={ContributeursListContainer} />
          <Route path="/ecosysteme" component={Ecosysteme} />
          <ProtectedRoute path="/creer-initiative" component={FormProjectContainer} />
          <ProtectedRoute path="/creer-mission" component={FormProjectContainer} />
          <ProtectedRoute path="/confirmation/:projectType/:id" component={ConfirmForm} />
          <Route path="/tmp" component={PaginatedUsers} />
          <Route path="/*" component={Page404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
