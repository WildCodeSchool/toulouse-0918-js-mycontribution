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
    }
  }

  componentDidMount() {
    const regex = /\//;
    const projecType = this.props.match.path.replace(regex, '');
    this.props.initiativesFetchRequest();

    axios.get(`/api/project/${projecType}`)
      .then(res => res.data)
      .then(initiative => this.props.initiativesFetchSuccess(projecType,initiative ))
      .catch(error => this.props.initiativesFetchError( error.response.data ))
  }

  render() {
    const projecType = this.props.match.path.substr(1);
    // const { error, initiative} = this.props;
    const projects = this.props[projecType];
    const ListComponent = componentMap[projecType];
    // const { error, events} = this.props;
    return (
      <div>
        {projects && projects.length > 0
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
