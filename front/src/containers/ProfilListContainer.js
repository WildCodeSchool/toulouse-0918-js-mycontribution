import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import { profilFetchMissionRequest, profilFetchMissionRequest, profilFetchMissionError } from '../actions'
import { connect } from 'react-redux';
import ProfilInitiativesList from '../components/Profil/ProfilInitiativesList';
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
      initiative: [],
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
      axios.get(`/api/profil/${projecType}`)
        .then(res => res.data)
        .then(projects => this.setState({ [projecType]: projects }))
        .catch(error => this.setState({ error }))
    }

    render() {
      const { user } = this.state;
      console.log(user);
      console.log(projecType);
      const projecType = this.props.match.path.substr(8);
      const projects = this.state[projecType];
      const ListComponent = componentMap[projecType];
      return (
        <Container fluid style={{ marginTop: '150px' }}>
          {
            user.id === 6
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
      )
    }
  }
/*   export default ProfilListContainer
 */
  const mapStateToProps = state => ({
    events: state.events.events,
    loading: state.events.loading,
    error: state.events.error
  })

  const mapDispatchToProps = {
    profilFetchMissionRequest, profilFetchMissionSuccess, profilFetchMissionError
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps)
  (ProfilListContainer)