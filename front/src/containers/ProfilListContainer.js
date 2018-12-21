import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import ProfilInitiativesList from '../components/Profil/ProfilInitiativesList';
import ProfilMissionsList from '../components/Profil/ProfilMissionsList';
import ProfilPresentation from '../components/Profil/ProfilPresentation';
import ProfilFavoriteList from '../components/Profil/ProfilFavoriteList';
import '../css/Accueil.scss';

const componentMap = {
  initiative: ProfilInitiativesList,
  mission: ProfilMissionsList,
  favorite: ProfilFavoriteList
};

class ProfilListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      error: null,
      projects: [],
      evenement: [],
      projecType: '',
      id: ''
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.projecType !== nextProps.projecType) {
      return { projecType: nextProps.projecType };
    }
    return null;
  }

  componentDidMount() {
    const firstAxios = this.props;
    axios.get('/api/profil/9')
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
    const projecType = firstAxios.match.path.replace('/profil/9/', '');
    this.fetchProjecType(projecType);
  }

  componentDidUpdate(prevProps) {
    const secondAxios = this.props;
    const prevProjecType = prevProps.match.path.replace('/profil/9/', '');
    const projecType = secondAxios.match.path.replace('/profil/9/', '');
    if (prevProjecType !== projecType) {
      this.fetchProjecType(projecType);
    }
  }

  fetchProjecType(projecType) {
    axios.get(`/api/profil/9/${projecType}`)
      .then(res => res.data)
      .then(projects => this.setState({ [projecType]: projects, loaded: true }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const matchPath = this.props;
    const { user } = this.state;
    const projecType = matchPath.match.path.substr(10);
    const projects = this.state[projecType];
    const ListComponent = componentMap[projecType];
    return (
      <Container fluid style={{ marginTop: '150px' }}>
        {user.id === 9
          ? <div className="mt-5 mb-5"><ProfilPresentation user={user} /><ListComponent projects={projects} /></div>
          : <div className="p-5 text-center"><Container className="bg-warning p-5 rounded"><p>Page impossible à afficher</p></Container></div>
        }
      </Container>
    );
  }
}
export default ProfilListContainer;
