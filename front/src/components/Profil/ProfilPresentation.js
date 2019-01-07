import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { StyledContainer, Text, Subtitle, Competence } from '../../data/styledComponents';

const ProfilPresentation = ({ user }) => ({
  render() {
    console.log(user)
    return (
      <StyledContainer>
        <Container fluid>
          <Row className="d-flex">
            <Col lg="4">
              <img className="w-100 rounded-circle" src={user.picture} alt={user.picture} />
            </Col>
            <Col lg="8" className="mt-5">
              <Subtitle className="font-weight-bold">
                {user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}
                &nbsp;{user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}
                <i style={{ fontSize: '2vh' }} className="fas fa-edit fa-fw mr-2 ml-2" />
              </Subtitle>
              <Text
                className="m-1"
              >
                {user.email}
              </Text>
              <Text
                color="warning"
                className="text-warning m-1 font-weight-bold">
                {user.connext}
              </Text>
            </Col>
          </Row>
          <Row className="mt-5">
            <Text className="font-weight-bold">
              <i className="fas fa-id-card fa-fw mr-2 ml-2" />
              Description
              <i style={{ fontSize: '2vh' }} className="fas fa-edit fa-fw mr-2 ml-2" />
            </Text>
            <Text className="text-justify">
              {user.presentation}
            </Text>
          </Row>
          <Row className="mt-2">
            <Text className="font-weight-bold">
              <i className="fas fa-star fa-fw mr-2 ml-2" />
              Centre d'intérêt et compétences
              <i style={{ fontSize: '2vh' }} className="fas fa-edit fa-fw mr-2 ml-2" />
            </Text>
          </Row>
          <Row className="mt-2 pb-5">
            {user.skill.split(',').map((skill, key) => <Competence key={key}>{skill}</Competence>)}
          </Row>
        </Container>
      </StyledContainer>
    );
  }
})

export default ProfilPresentation;
