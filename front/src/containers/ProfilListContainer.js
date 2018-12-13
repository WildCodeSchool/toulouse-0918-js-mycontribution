import React, { Component } from 'react';
import axios from 'axios';
/* import { connect } from 'react-redux';
 */import { Container } from 'reactstrap';
/* import { profilFetchProjectsRequest, profilFetchProjectsSuccess, profilFetchProjectsError } from '../actions';
 */import ProfilInitiativesList from '../components/Profil/ProfilInitiativesList';
import ProfilMissionsList from '../components/Profil/ProfilMissionsList';
import '../css/Accueil.scss';
import ProfilPresentation from '../components/Profil/ProfilPresentation';

const componentMap = {
  initiative: ProfilInitiativesList,
  mission: ProfilMissionsList
};

class ProfilListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      error: null,
      projects: [],
      mission: [],
      evenement: [],
    };
  }

  componentDidMount() {
    axios.get('/api/profil')
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
    // recup path Route d'appel
    const projecType = this.props.match.path.replace('/profil/', '');
    axios.get(`/api/project/${projecType}`)
      .then(res => res.data)
      .then(projects => this.setState({ [projecType]: projects, loaded: true }))
      .catch(error => this.setState({ error }))
  }
  /* .then(projects => this.props.profilFetchProjectsSuccess(projects))
  .catch(error => this.props.profilFetchProjectsError(error.response.data)) */
 
  render() {
    const { user } = this.state;
    const projecType = this.props.match.path.substr(8);
    const projects = this.state[projecType];
    const ListComponent = componentMap[projecType];
    return (
      <Container fluid style={{ marginTop: '150px' }}>
        { user.id === 9
          ? <div className="mt-5 mb-5">
              <ProfilPresentation user={user} />
              <ListComponent projects={projects} />
            </div>
          : <div className="p-5 text-center">
              <Container className="bg-warning p-5 rounded">
                <p>Page impossible</p>
              </Container>
            </div>
          }
      </Container>
    );
  }
}
export default ProfilListContainer;
/*   const mapStateToProps = state => ({
    projects: state.projects.projects,
    loading: state.projects.loading,
    error: state.projects.error
  })

  const mapDispatchToProps = {
    profilFetchProjectsRequest, profilFetchProjectsSuccess, profilFetchProjectsError
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps)
  (ProfilListContainer) */