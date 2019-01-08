import React, { Component } from 'react';
import InitiativesList from '../components/Initiatives/InitiativesList';
import MissionsList from '../components/Missions/MissionsList';
import { projectsFetchRequest, projectsFetchSuccess, projectsFetchError } from '../actions/actionsProjects'
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
      evenement: [],
      loaded:false,
      isFavorite: false
    }
    this.handleFavorite = this.handleFavorite.bind(this);
    this.axiosData = this.axiosData.bind(this);
  }


  axiosData() {
    this.props.projectsFetchRequest();
    const projecType = this.props.match.path.substr(1);

    axios.get(`/api/project/${projecType}`)
      .then(res => res.data)
      .then(project => this.props.projectsFetchSuccess(projecType, project))
      .catch(error => this.props.projectsFetchError(error.response.data))

  }

  handleFavorite() {
    this.setState({
      isFavorite: !this.state.isFavorite
    })
  }

  componentDidMount() {
    this.axiosData();
  }

  componentDidUpdate(prevProps) {
    const prevType = prevProps.match.path.substr(1);
    const projecType = this.props.match.path.substr(1);
    if (prevType !== projecType) {
      this.axiosData();
    }
  }

  render() {
    const projecType = this.props.match.path.substr(1);
    // const { error, initiative} = this.props;
    const projects = this.props[projecType];
    const ListComponent = componentMap[projecType];
    const { isFavorite } = this.state
    return (
      <div>
        { projects.length > 0
          &&
          <div>
            
            <ListComponent 
              projects={projects} 
              isFavorite={isFavorite} 
              onClick={this.handleFavorite}
              
            />
            
          </div>
        }
      </div>

    );
  }
}

const mapStateToProps = state => ({
  initiative: state.project.initiative,
  mission: state.project.mission,
  loading: state.project.loading,
  error: state.project.error
})

const mapDispatchToProps = {
  projectsFetchRequest, projectsFetchSuccess, projectsFetchError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ProjectListContainer)
