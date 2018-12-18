import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
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
      projects: [],
      evenement: [],
      projecType: ''
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.projecType !== nextProps.projecType) {
      return { projecType: nextProps.projecType };
    }
    return null;
  }

  componentDidMount() {
    axios.get('/api/profil')
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
    const projecType = this.props.match.path.replace('/profil/', '');
    this.fetchProjecType(projecType);
  }

  componentDidUpdate(prevProps) {
    const prevProjecType = prevProps.match.path.replace('/profil/', '');
    const projecType = this.props.match.path.replace('/profil/', '');
    console.log(projecType, prevProjecType);
    if (prevProjecType !== projecType) {
      this.fetchProjecType(projecType);
    }
  }

  fetchProjecType(projecType) {
    axios.get(`/api/project/${projecType}`)
      .then(res => res.data)
      .then(projects => this.setState({ [projecType]: projects, loaded: true }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { user } = this.state;
    const projecType = this.props.match.path.substr(8);
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
