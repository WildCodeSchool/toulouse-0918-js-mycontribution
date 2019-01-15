import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, FormGroup, Input, Form } from 'reactstrap';
import '../css/Accueil.scss';
import { StyledContainer, Text, Subtitle, Competence, ButtonForm, LittleText } from '../data/styledComponents';
// ajout des modals
import ProfilModalNameUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalNameUpdate';
import ProfilModalEmailUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalEmailUpdate';
import ProfilModalConnextUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalConnextUpdate';
import ProfilModalPasswordUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalPasswordUpdate';
import ProfilModalPictureUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalPictureUpdate';
import instance from '../helpers/instance';

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
    event.preventDefault();
    instance.put(`/api/profil/update/${userId}`,
      {
        presentation: this.state.user.presentation,
        skill: this.state.user.skill
      })
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
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
      <Container fluid style={{ marginTop: '150px', marginBottom: '150px' }}>
        <div className="mt-5 mb-5">

          <StyledContainer>
            <Container Fluid className="p-5">
              <Link to="/profil/favorite"><i className="fas fa-arrow-left" />{' '}Retour au profil</Link>
              <Subtitle className="text-center mt-4">Informations personnelles</Subtitle>
              <Text>Changer vos informations comme votre photo, votre nom, votre adresse E-Mail ou votre mot de passe.</Text>
              <Row className="align-items-center h-100 border-bottom mt-3">
                <Col lg="4" className="align-middle">
                  <Text className="font-weight-bold">Photo</Text>
                </Col>
                <Col lg="7">
                  <Text>Modifier votre photo de profil</Text>
                </Col>
                <Col lg="1">
                  <ProfilModalPictureUpdate updateUser={this.updateUser} />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom">
                <Col lg="4" className="align-middle">
                  <Text className="font-weight-bold">Nom</Text>
                </Col>
                <Col lg="7">
                  <Text>{user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}
                    &nbsp;{user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}</Text>
                </Col>
                <Col lg="1">
                  <ProfilModalNameUpdate updateUser={this.updateUser} />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom">
                <Col lg="4" className="align-middle">
                  <Text className="font-weight-bold">Adresse E-Mail</Text>
                </Col>
                <Col lg="7">
                  <Text>{user.email}</Text>
                </Col>
                <Col lg="1">
                  <ProfilModalEmailUpdate updateUser={this.updateUser} />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom">
                <Col lg="4" className="align-middle">
                  <Text className="font-weight-bold">Compte Connext</Text>
                </Col>
                <Col lg="7">
                  <Text>{user.connext}</Text>
                </Col>
                <Col lg="1">
                  <ProfilModalConnextUpdate updateUser={this.updateUser} />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom">
                <Col lg="4" className="align-middle">
                  <Text className="font-weight-bold">Mot de passe</Text>
                </Col>
                <Col lg="7">
                  <Text>*******</Text>
                </Col>
                <Col lg="1">
                  <ProfilModalPasswordUpdate updateUser={this.updateUser} />
                </Col>
              </Row>
            </Container>
          </StyledContainer>

          <StyledContainer className="mt-3">
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

          <StyledContainer className="mt-3">
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
              {user.skill.split(',').map((skill, key) => <Competence key={key}>{skill}</Competence>)}
            </Row>
          </StyledContainer>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => { return { userId: state.auth.user.id }; };

export default connect(mapStateToProps, null)(ProfilUpdate);
