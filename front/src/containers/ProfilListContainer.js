import React, { Component } from 'react';
import ProjectList from '../components/ProjectList'

import axios from 'axios';

class ProfilListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      initiative: [],
      mission: [],
      evenement: []
    }
  }

  componentDidMount() {
    // recup path Route d'appel
    let regex = /\//;
    const projecType = this.props.match.path.replace(regex, '');
    this.fetchProject(projecType);
  }

  fetchProject(projecType) {
    axios.get(`/api/project/${projecType}`)
      .then(res => res.data)
      .then(projects => this.setState({ [projecType]: projects }))
      .catch(error => this.setState({ error }))
  }

  render() {
    let regex = /\//;
    const projecType = this.props.match.path.replace(regex, '');
    const projects = this.state[projecType];
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

export default ProfilListContainer;