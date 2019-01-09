import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap';
import '../css/Accueil.scss';
import { StyledContainer, Text, Subtitle, Competence } from '../data/styledComponents';
// ajout des modals
import ProfilModalNameUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalNameUpdate';
import ProfilModalEmailUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalEmailUpdate';
import ProfilModalConnextUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalConnextUpdate';
import ProfilModalPasswordUpdate from '../components/Profil/ModalUpdateProfil/ProfilModalPasswordUpdate';

class ProfilUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { userId } = this.props;
    console.log(userId);
    axios.get(`/api/profil/${userId}`)
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
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

  render() {
    const { user } = this.state;
    if (!user) {
      return <div></div>
    }
    return (
      <Container fluid style={{ marginTop: '150px' }}>
        <div className="mt-5 mb-5">

          <StyledContainer>
            <Container Fluid>
              <Subtitle className="text-center">Informations personnelles</Subtitle>
              <Text>Changer vos informations comme votre photo, votre nom, votre adresse E-Mail ou votre mot de passe.</Text>
              <Row className="align-items-center h-100 border-bottom p-2 mt-3">
                <Col lg="4" className="align-middle">
                  <Text className="font-weight-bold">Photo</Text>
                </Col>
                <Col lg="7">
                  <Text>Changer votre photo de profil</Text>
                </Col>
                <Col lg="1">
                  <img className="w-100 rounded-circle border" src={user.picture} alt={user.picture} />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom p-2">
                <Col lg="4" className="align-middle">
                  <Text className="font-weight-bold">Nom</Text>
                </Col>
                <Col lg="7">
                  <Text>{user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}
                    &nbsp;{user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}</Text>
                </Col>
                <Col lg="1">
                  <ProfilModalNameUpdate />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom p-2">
                <Col lg="4" className="align-middle">
                  <Text className="font-weight-bold">Adresse E-Mail</Text>
                </Col>
                <Col lg="7">
                  <Text>{user.email}</Text>
                </Col>
                <Col lg="1">
                  <ProfilModalEmailUpdate />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom p-2">
                <Col lg="4" className="align-middle">
                  <Text className="font-weight-bold">Compte Connext</Text>
                </Col>
                <Col lg="7">
                  <Text>{user.connext}</Text>
                </Col>
                <Col lg="1">
                  <ProfilModalConnextUpdate />
                </Col>
              </Row>

              <Row className="align-items-center h-100 border-bottom p-2">
                <Col lg="4" className="align-middle">
                  <Text className="font-weight-bold">Mot de passe</Text>
                </Col>
                <Col lg="7">
                  <Text>*******</Text>
                </Col>
                <Col lg="1">
                  <ProfilModalPasswordUpdate />
                </Col>
              </Row>
            </Container>
          </StyledContainer>

          <StyledContainer className="mt-3">
            <Subtitle className="text-center">Votre description</Subtitle>
            <Container>
              <FormGroup>
                <Input
                  className="text-left"
                  type="textarea"
                  name="presentation"
                  id="presentation"
                  onChange={this.handleChange}
                  value={user.presentation}
                />
              </FormGroup>
            </Container>
            <Button className="float-right">Valider</Button>
          </StyledContainer>

          <StyledContainer className="mt-3">
            <Subtitle className="text-center">intérêts et compétences</Subtitle>
            <Container>
              <FormGroup>
                <Input
                  className="text-left"
                  type="textarea"
                  name="skill"
                  id="skill"
                  onChange={this.handleChange}
                  value={user.skill}
                />
              </FormGroup>
              <Row className="mt-2">
                {user.skill.split(',').map((skill, key) => <Competence key={key}>{skill}</Competence>)}
              </Row>
            </Container>
            <Button className="float-right">Valider</Button>
          </StyledContainer>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => { return { userId: state.auth.user.id }; };

export default connect(mapStateToProps)(ProfilUpdate);
