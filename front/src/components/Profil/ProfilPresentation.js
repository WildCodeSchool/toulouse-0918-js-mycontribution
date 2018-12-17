import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { StyledContainer, Text, Subtitle, Competence, MissionCard, EventCard } from '../../data/styledComponents';

const ProfilPresentation = () => ({
  render() {
    return (
      <StyledContainer>
        <Container fluid>
          <Row className="d-flex">
            <Col lg="4">
              <img className="w-100 rounded-circle"
                src={this.props.user.picture}
                alt={this.props.user.picture}
              >
              </img>
            </Col>
            <Col lg="8" className="mt-5">
              <Subtitle className="font-weight-bold">
                {this.props.user.lastname.charAt(0).toUpperCase() + this.props.user.lastname.slice(1)}
                &nbsp;{this.props.user.firstname.charAt(0).toUpperCase() + this.props.user.firstname.slice(1)}
                <i style={{ fontSize: '2vh' }} className="fas fa-edit fa-fw mr-2 ml-2"></i>
              </Subtitle>
              <Text
                className="m-1">
                {this.props.user.email}
              </Text>
              <Text
                color="warning"
                className="text-warning m-1 font-weight-bold">
                {this.props.user.connext}
              </Text>
            </Col>
          </Row>
          <Row className="mt-5">
            <Text className="font-weight-bold">
              <i className="fas fa-id-card fa-fw mr-2 ml-2"></i>
              Description
                <i style={{ fontSize: '2vh' }} className="fas fa-edit fa-fw mr-2 ml-2"></i>
            </Text>
            <Text className="text-justify">
              {this.props.user.presentation}
            </Text>
          </Row>
          <Row className="mt-2">
            <Text className="font-weight-bold">
              <i className="fas fa-star fa-fw mr-2 ml-2"></i>
              Centre d'intérêt et compétences
              <i style={{ fontSize: '2vh' }} className="fas fa-edit fa-fw mr-2 ml-2"></i>
            </Text>
          </Row>
          <Row className="mt-2 pb-5">
            {
              this.props.user.skill.split(',').map(skill =>
                <Competence>
                  {skill}
                </Competence>
              )}
          </Row>
        </Container>
      </StyledContainer>
    );
  }
})

export default ProfilPresentation;