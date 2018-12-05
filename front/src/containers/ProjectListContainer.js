import React, { Component } from 'react';
import ProjectList from '../components/ProjectList'

import axios from 'axios';


class ProjectListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      initiative : [],
      mission : [],
      evenement : []
    }
  }

componentDidMount() {
  this.fetchProject('initiative');
  this.fetchProject('mission');
}

fetchProject(type) {
  axios.get(`/api/profil/${type}`)
    .then(res => res.data)
    .then(projects =>  this.setState({ [type] : projects }))
    .catch(error => this.setState({ error }))
}

  render() {
    const { error, initiative, mission, evenement} = this.state;
    return (
      <div>
        <ProjectList projects={initiative} />
        <ProjectList projects={mission} />
        
      {/* {
        error 
          ? <div> {error.message} </div>
          : <ProjectList projects={projects} />
      } */}
      </div>

    );
  }
}

export default ProjectListContainer;