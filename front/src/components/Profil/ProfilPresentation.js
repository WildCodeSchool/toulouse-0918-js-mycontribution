import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { StyledContainer, Text, Subtitle, Competence } from '../../data/styledComponents';
import { formatText } from '../../helpers/formatText';

const ProfilPresentation = ({ user }) => ({
  render() {
    return (
      <StyledContainer>
        <Container fluid>
          <Row className="d-flex">
            <Col lg="4">
              <img className="w-100 rounded-circle" src={user.picture} alt={user.picture} />
            </Col>
            <Col lg="8" className="mt-5">
              <Subtitle className="font-weight-bold">
                {user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}
                &nbsp;{user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}
              </Subtitle>
              <Text
                className="m-1"
              >
                {user.email}
              </Text>
              <Text
                color="warning"
                className="text-warning m-1 font-weight-bold"
              >
                {user.connext}
              </Text>
              <Link to="/profil/update"><i class="fas fa-pen" />{' '}Paramètres de compte</Link>
            </Col>
          </Row>
          <Row className="mt-5">
            <Text className="font-weight-bold">
              <i className="fas fa-id-card fa-fw mr-2 mb-3" />Description</Text>
          </Row>
          <Row>
            <Text className="text-justify">{user.presentation && formatText(user.presentation)}</Text>
          </Row>
          <Row className="mt-5">
            <Text className="font-weight-bold">
              <i className="fas fa-star fa-fw mr-2" />
              Centre d'intérêts et compétences
            </Text>
          </Row>
          <Row className="mt-2">
            {user.skill.split(',').map((skill, key) => <Competence key={key}>{skill}</Competence>)}
          </Row>
        </Container>
      </StyledContainer>
    );
  }
})

export default ProfilPresentation;
