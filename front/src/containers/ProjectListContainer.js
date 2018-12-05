import React, { Component } from 'react';
import ProjectList from '../components/ProjectList'

import axios from 'axios';


class ProjectListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      initiative: [],
      mission: [],
      evenement: [],
      loaded:false
    }
  }

  componentDidMount() {
    // recup path Route d'appel dans les props
    let regex = /\//;
    const projecType = this.props.match.path.replace(regex, '');
    this.setState({loaded:false});
    this.fetchProject(projecType);
  }

  fetchProject(projecType) {

    axios.get(`/api/project/${projecType}`)
      .then(res => res.data)
      .then(projects => this.setState({ [projecType]: projects,loaded:true }))
      .catch(error => this.setState({ error }))
  }

  render() {
    // recup path Route d'appel dans les props
    let regex = /\//;
    const projecType = this.props.match.path.replace(regex, '');
    const projects = this.state[projecType];
    const {loaded} = this.state;
    if(loaded===false){
      
    }
    return (
      <div>
        {projects.length > 0
          ?
          <div>
            <ProjectList projects={projects} />
          </div>
          : ''
        }
      </div>

    );
  }
}

export default ProjectListContainer;