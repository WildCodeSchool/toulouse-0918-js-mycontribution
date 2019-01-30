import React, { Component } from 'react';
import InitiativesList from '../components/Initiatives/InitiativesList';
import MissionsList from '../components/Missions/MissionsList';
import {
  projectsFetchRequest,
  projectsFetchSuccess,
  projectsFetchError
} from '../actions/actionsProjects';
import {
  fetchFavoritesSuccess
} from '../actions';
import { connect } from 'react-redux';

import axios from 'axios';
import instance from '../helpers/instance';

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
      loaded: false,
      isFavorite: false
    }
    this.handleFavorite = this.handleFavorite.bind(this);
    this.fetchProjects = this.fetchProjects.bind(this);
  }


  fetchProjects() {
    this.props.projectsFetchRequest();
    const projecType = this.props.match.path.substr(1);

    axios.get(`/api/project/${projecType}`)
      .then(res => res.data)
      .then(project => this.props.projectsFetchSuccess(projecType, project))
      .catch(error => this.props.projectsFetchError(error.response.data))

  }

  fetchFavorites() {
    const { user, fetchFavoritesSuccess } = this.props;
    if (!user) {
      return;
    }
    instance.get(`/api/profil/${user.id}/favorite-ids`)
      .then(res => res.data)
      .then(favoriteIds => this.props.fetchFavoritesSuccess(favoriteIds))
      .catch(error => this.props.projectsFetchError(error.response.data))
  }

  handleFavorite() {
    this.setState({
      isFavorite: !this.state.isFavorite
    })
  }

  componentDidMount() {
    this.fetchProjects();
    this.fetchFavorites();
  }

  componentDidUpdate(prevProps) {
    const prevType = prevProps.match.path.substr(1);
    const projecType = this.props.match.path.substr(1);
    if (prevType !== projecType) {
      this.fetchProjects();
    }
  }

  render() {
    const projecType = this.props.match.path.substr(1);
    const { favorites } = this.props;
    const projects = this.props[projecType];
    const ListComponent = componentMap[projecType];
    return (
      <div>
        {projects.length > 0
          &&
          <div>

            <ListComponent
              // projects={projects}
              favorites={favorites}
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
  error: state.project.error,
  user: state.auth.user,
  favorites: state.favorites
})

const mapDispatchToProps = {
  projectsFetchRequest,
  projectsFetchSuccess,
  projectsFetchError,
  fetchFavoritesSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer);
