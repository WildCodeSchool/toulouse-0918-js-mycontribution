import React, { Component } from 'react';
import ProjectList from '../components/ProjectList'
import InitiativesList from '../components/Initiatives/InitiativesList';
import MissionsList from '../components/Missions/MissionsList';
import axios from 'axios';

const componentMap = {
  initiative: InitiativesList,
  mission: MissionsList
};

class ProjectListContainer extends Component {
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
    const projecType = this.props.match.path.substr(1);
    const projects = this.state[projecType];
    const ListComponent = componentMap[projecType];
    return (
      <div>
        {projects.length > 0
          ?
          <div>
            <ListComponent projects={projects} />
          </div>
          : ''
        }
      </div>

    );
  }
}

export default ProjectListContainer;