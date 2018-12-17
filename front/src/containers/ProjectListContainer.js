import React, { Component } from 'react';
// import ProjectList from '../components/ProjectList'
import InitiativesList from '../components/Initiatives/InitiativesList';
import MissionsList from '../components/Missions/MissionsList';
// import ContributeursList from '../components/Contributeurs/ContributeursList';
// import EvenementsList from '../components/Evenements/EvenementsList';

import axios from 'axios';

const componentMap = {
  initiative: InitiativesList,
  mission: MissionsList
  // ,contributeur:ContributeursList,
  // evenement:EvenementsList
};

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
    const projecType = this.props.match.path.substr(1);
    const projects = this.state[projecType];
    const ListComponent = componentMap[projecType];
    return (
      <div>
        { projects.length > 0
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