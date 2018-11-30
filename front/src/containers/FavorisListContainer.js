import React, { Component } from 'react';
import ListFavoris from '../components/Profil/ListFavoris'
import axios from 'axios';


class FavorisListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      initiative:[],
      mission:[]
    }
  }
componentDidMount() {
  this.fetchProject('initiative');
  this.fetchProject('mission');
}

fetchProject(type) {
  axios.get(`/api/project/${type}`)
    .then(res => res.data)
    .then(projects =>  this.setState({ [type] : projects }))
    .catch(error => this.setState({ error }))
}

  render() {
    return (
      <div>
       { initiative.length>0 
          ? 
          <div>
          <ListFavoris projects={mission} /> </div>
          : '' 
        }
      </div>

    );
  }
}

export default FavorisListContainer;