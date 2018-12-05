import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { StyledContainer } from '../../data/styledComponents';

const AccueilNews = () => ({
  render() {
    return (
      <StyledContainer>
        <Container fluid>
          <Row className="d-flex">
            <Col lg="4" className="mt-3">
              <img className="w-100 rounded-circle"
                src={this.props.user.picture}
                alt={this.props.user.picture} >
              </img>
            </Col>
            <Col lg="8" className="mt-5">
              <h2 className="font-weight-bold">
                {this.props.user.firstname.charAt(0).toUpperCase() + this.props.user.firstname.slice(1)}
                &nbsp;{this.props.user.lastname.charAt(0).toUpperCase() + this.props.user.lastname.slice(1)}
              </h2>
              <p 
                className="m-1"> 
                { this.props.user.email }   
              </p>
              <p
                  color="warning"
                  className="text-warning m-1 font-weight-bold">
                  {this.props.user.connext}
                </p>
              </Col>
            </Row>
            <Row className="mt-5">
              <i className="fas fa-id-card ml-2 mr-2"></i>
              <h5 className="font-weight-bold">Description</h5>
              <i className="fas fa-edit ml-2 mr-2"></i>
              <p className="text-justify">{this.props.user.presentation}</p>
            </Row>
            <Row className="mt-2">
              <i className="fas fa-star mr-2"></i>
              <h5 className="font-weight-bold">Centre d"intérêt et compétences</h5>
              <i className="fas fa-edit ml-2 mr-2"></i>
            </Row>
            <Row className="mt-2 pb-5">
              {
                this.props.user.skill.split(',').map(skill =>
                  <p className="bg-warning p-2 ml-1 mr-1 rounded">
                    {skill}
                  </p>
                )}
            </Row>
          </Container>
        </StyledContainer>
        );
    }
})

export default AccueilNews;