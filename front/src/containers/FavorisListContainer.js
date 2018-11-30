import React, { Component } from 'react';
import ListFavoris from '../components/Profil/ListFavoris'

import axios from 'axios';


class FavorisListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      projects : []
    }
  }

componentDidMount() {
  this.fetchInitiatives();
}

fetchInitiatives() {
  axios.get('/profil')
    .then(res => res.data)
    .then(projects =>  this.setState({ projects }))
    .catch(error => this.setState({ error }))
}

  render() {
    const { error, projects} = this.state;
    return (
      <div>
        
      {
        error 
          ? <div> {error.message} </div>
          : <ListFavoris projects={projects} />
      }
      </div>

    );
  }
}

export default FavorisListContainer;