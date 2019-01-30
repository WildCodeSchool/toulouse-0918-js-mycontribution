import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, FormGroup, Input, Form } from 'reactstrap';
import jwtDecode from 'jwt-decode';
import { userAuth } from '../actions';
import { StyledContainer, Text, Subtitle, Competence, ButtonForm, LittleText } from '../data/styledComponents';
// ajout des modals
import ProfilModalNameUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalNameUpdate';
import ProfilModalEmailUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalEmailUpdate';
import ProfilModalConnextUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalConnextUpdate';
import ProfilModalPasswordUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalPasswordUpdate';
import ProfilModalPictureUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalPictureUpdate';
import instance from '../helpers/instance';
import '../css/Accueil.scss';

class ProfilUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
      presentationButton: 'Changer',
      skillsButton: 'Changer'
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
    this.onPressPresentation = this.onPressPresentation.bind(this);
    this.onPressSkills = this.onPressSkills.bind(this);
    this.refreshAuthData = this.refreshAuthData.bind(this);
    this.updateAndRefreshAuth = this.updateAndRefreshAuth.bind(this);
  }

  componentDidMount() {
    const { userId } = this.props;
    instance.get(`/api/profil/${userId}`)
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
  }

  // change text of Presentation
  onPressPresentation() {
    this.setState({
      presentationButton: 'Valider'
    });
  }

  // change text of skills
  onPressSkills() {
    this.setState({
      skillsButton: 'Valider'
    });
  }

  handleChange(event) {
    const { value } = event.target;
    const key = event.target.name;
    this.setState(prevState => {
      // copy de l'objet user
      const user = { ...prevState.user, [key]: value };
      // return l'object decrivant les modifications du state
      return { user };
    });
  }

  updateSettings(event) {
    const { userId } = this.props;
    const { user } = this.state;
    event.preventDefault();
    return instance.put(`/api/profil/update/${userId}`, user)
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
  }

  // Envoie une requête pour rafraîchir le JWT, afin de stocker
  // dans le store Redux (state.auth.user) les infos à jour, notamment
  // nom et avatar
  refreshAuthData() {
    const { userAuth } = this.props
    return instance.get('/api/auth/renew-jwt')
      .then(res => res.data)
      .then(token => {
        localStorage.setItem('token', token);
        const user = jwtDecode(token);
        userAuth(user, token);
      })
  }

  // Pour l'unique cas (update name) où on doit mettre à jour les infos user
  // dans le store Redux, on appelle d'abord l'update puis on rafraîchit le JWT
  updateAndRefreshAuth(event) {
    event.preventDefault();
    return this.updateSettings(event)
      .then(this.refreshAuthData);
  }

  updateUser(user) {
    this.setState({
      user
    });
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return <div></div>
    }
    return (
      <Container fluid className="lists">
        <div className="mt-5 mb-5">

          <StyledContainer className="ProfilUpdate">
            <Container fluid className="p-5">
              <Link to="/profil/favorite"><i className="fas fa-arrow-left" />{' '}Retour au profil</Link>
              <Subtitle className="text-center mt-4">Informations personnelles</Subtitle>
              <Text>Changer vos informations comme votre photo, votre nom, votre adresse E-Mail ou votre mot de passe.</Text>

              <Row className="align-items-center h-100 border-bottom mt-3">
                <Col xs="12" lg="4" className="align-middle">
                  <Text className="font-weight-bold">Photo</Text>
                </Col>
                <Col xs="8" lg="6">
                  <Text>Modifier votre photo de profil</Text>
                </Col>
                <Col xs="4" lg="2" className="pr-0">
                  <ProfilModalPictureUpdate
                    user={user}
                    updateUser={this.updateUser}
                    refreshAuthData={this.refreshAuthData}
                  />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom">
                <Col xs="12" lg="4" className="align-middle">
                  <Text className="font-weight-bold">Nom</Text>
                </Col>
                <Col xs="8" lg="6">
                  <Text>{user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}
                    &nbsp;{user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}</Text>
                </Col>
                <Col xs="4" lg="2" className="pr-0">
                  <ProfilModalNameUpdate
                    user={user}
                    handleChange={this.handleChange}
                    updateSettings={this.updateAndRefreshAuth}
                  />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom">
                <Col xs="12" lg="4" className="align-middle">
                  <Text className="font-weight-bold">Adresse E-Mail</Text>
                </Col>
                <Col xs="8" lg="6">
                  <Text>{user.email}</Text>
                </Col>
                <Col xs="4" lg="2" className="pr-0">
                  <ProfilModalEmailUpdate
                    user={user}
                    handleChange={this.handleChange}
                    updateUser={this.updateUser}
                    updateSettings={this.updateSettings}
                  />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom">
                <Col xs="12" lg="4" className="align-middle">
                  <Text className="font-weight-bold">Compte Connext</Text>
                </Col>
                <Col xs="8" lg="6">
                  <Text>{user.connext}</Text>
                </Col>
                <Col xs="4" lg="2" className="pr-0">
                  <ProfilModalConnextUpdate
                    user={user}
                    handleChange={this.handleChange}
                    updateUser={this.updateUser}
                    updateSettings={this.updateSettings}
                  />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom">
                <Col xs="12" lg="4" className="align-middle">
                  <Text className="font-weight-bold">Mot de passe</Text>
                </Col>
                <Col xs="8" lg="6">
                  <Text>*******</Text>
                </Col>
                <Col xs="4" lg="2" className="pr-0">
                  <ProfilModalPasswordUpdate
                    user={user}
                    handleChange={this.handleChange}
                    updateUser={this.updateUser}
                    updateSettings={this.updateSettings}
                  />
                </Col>
              </Row>

            </Container>
          </StyledContainer>

          <StyledContainer className="mt-4">
            <Subtitle className="text-center">Votre description</Subtitle>
            <Row className="mt-2 mr-3 ml-3 font-italic">
              <Text className="text-justify">{'"'}{user.presentation}{'"'}</Text>
            </Row>
            <Form onSubmit={this.updateSettings} className="p-3">
              <FormGroup>
                <Input
                  className="text-left"
                  type="textarea"
                  name="presentation"
                  id="presentation"
                  onChange={this.handleChange}
                  value={user.presentation}
                  onClick={this.onPressPresentation}
                />
                <ButtonForm className="float-right">{this.state.presentationButton}</ButtonForm>
              </FormGroup>
            </Form>
          </StyledContainer>

          <StyledContainer className="mt-4">
            <Subtitle className="text-center">intérêts et compétences</Subtitle>
            <Form onSubmit={this.updateSettings} className="p-3">
              <FormGroup>
                <Input
                  className="text-left"
                  type="textarea"
                  name="skill"
                  id="skill"
                  onChange={this.handleChange}
                  value={user.skill}
                  onClick={this.onPressSkills}
                />
                <ButtonForm className="float-right">{this.state.skillsButton}</ButtonForm>
                <LittleText>*** Veuillez saisir les champs séparés par une virgule et un espace. Exemple : mécanique, impression 3D, aéromodélisme</LittleText>
              </FormGroup>
            </Form>
            <Row className="mt-2 mr-3 ml-3">
              {
                user.skill
                  .split(',')
                  // permet de ne pas afficher une pill vide
                  .filter(skill => skill.trim())
                  .map((skill, key) => <Competence key={key}>{skill}</Competence>)
              }
            </Row>
          </StyledContainer>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => { return { userId: state.auth.user.id }; };

const mapDispatchToProps = {
  userAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilUpdate);
