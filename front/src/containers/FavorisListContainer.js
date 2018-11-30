import React, { Component } from 'react';
import ListFavoris from '../components/Profil/ListFavoris'
import axios from 'axios';


class FavorisListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    }
  }
componentDidMount() {
}

fetchProject(type) {
  axios.get(`/api/projects`)
    .then(res => res.data)
    .then(projects =>  this.setState({ [type] : projects }))
    .catch(error => this.setState({ error }))
}

  render() {
    const projects = {projects}
    return (
      <div>
       { projects.length>0 
          ? 
          <div>
          <ListFavoris projects={projects} /> </div>
          : '' 
        }
      </div>

    );
  }
}

export default FavorisListContainer;