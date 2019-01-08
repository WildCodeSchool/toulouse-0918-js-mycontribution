import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import '../../css/Accueil.scss';
import { StyledContainer, Text, Subtitle, Competence } from '../../data/styledComponents';

class ProfilUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    console.log(userId);
    axios.get(`/api/profil/${userId}`)
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
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
                  <i className="fas fa-chevron-right" />
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
                  <i className="fas fa-chevron-right" />
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
                  <i className="fas fa-chevron-right" />
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
                  <i className="fas fa-chevron-right" />
                </Col>
              </Row>
            </Container>
          </StyledContainer>

          <StyledContainer className="mt-3">
            <Subtitle className="text-center">Votre description</Subtitle>
            <Container>
              <FormGroup>
                <Input type="textarea" name="text" id="description" value={user.presentation} />
              </FormGroup>
            </Container>
            <Button className="float-right">Valider</Button>
          </StyledContainer>

          <StyledContainer className="mt-3">
            <Subtitle className="text-center">intérêts et compétences</Subtitle>
            <Container>
              <FormGroup>
                <Input type="textarea" name="text" id="description" value={user.skill} />
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
