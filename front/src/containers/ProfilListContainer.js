import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      user: null,
      error: null,
      projects: null,
      evenement: [],
      projecType: '',
      id: '',
      test: ''
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
    const { test } = this.props;
    console.log(test)
    axios.get(`/api/profil/${test}`)
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
    const projecType = firstAxios.match.path.replace(`/profil/${test}/`, '');
    this.fetchProjecType(projecType);
  }

  componentDidUpdate(prevProps) {
    const { test } = this.props;
    const secondAxios = this.props;
    const prevProjecType = prevProps.match.path.replace(`/profil/`, '');
    const projecType = secondAxios.match.path.replace(`/profil/`, '');
    if (prevProjecType !== projecType) {
      this.fetchProjecType(projecType);
    }
  }

  fetchProjecType(projecType) {
    const { test } = this.props;
    axios.get(`/profil/${test}/${projecType}`)
      .then(res => res.data)
      .then(projects => this.setState({ [projecType]: projects, loaded: true }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const matchPath = this.props;
    const {test} = this.props;
    const {user} = this.state;
    const projecType = matchPath.match.path.substr(8);
    const projects = this.state[projecType];
    console.log(projecType);
    const ListComponent = componentMap[projecType];
    console.log(ListComponent)
    return (
      <Container fluid style={{ marginTop: '150px' }}>
        {user
          ? <div className="mt-5 mb-5"><ProfilPresentation user={user} /><ListComponent projects={projects} /></div>
          : <div className="p-5 text-center"><Container className="bg-warning p-5 rounded"><p>Erreur 404 => Page impossible à afficher</p></Container></div>
        }
      </Container>
    );
  }
}
const mapStateToProps = state => { return { test: state.auth.user.id }; };

export default connect(mapStateToProps)(ProfilListContainer);
