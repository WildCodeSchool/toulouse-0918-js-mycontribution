import React, { Component } from 'react';
import InitiativesList from '../components/Initiatives/InitiativesList';
import MissionsList from '../components/Missions/MissionsList';
import { initiativesFetchRequest, initiativesFetchSuccess, initiativesFetchError } from '../actions/actionsInitiatives'
import { connect } from 'react-redux';

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

  // componentDidMount() {
  //   // recup path Route d'appel dans les props
  //   let regex = /\//;
  //   const projecType = this.props.match.path.replace(regex, '');
  //   this.fetchProject(projecType);
  // }

  // fetchProject(projecType) {
  //   axios.get(`/api/project/${projecType}`)
  //     .then(res => res.data)
  //     .then(projects => this.setState({ [projecType]: projects,loaded:true }))
  //     .catch(error => this.setState({ error }))
  // }

  componentDidMount() {
    const projecType = this.props.match.path.replace(regex, '');
    this.props.initiativesFetchRequest()
    let regex = /\//;
    axios.get(`/api/project/${projecType}`)
      .then(res => res.data)
      .then(initiative => this.props.initiativesFetchSuccess({[projecType] : initiative} ))
      .catch(error => this.props.initiativesFetchError( error.response.data ))
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

const mapStateToProps = state => ({
  initiative: state.initiative.initiative,
  loading: state.initiative.loading,
  error: state.initiative.error
})

const mapDispatchToProps = {
  initiativesFetchRequest, initiativesFetchSuccess, initiativesFetchError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ProjectListContainer)
