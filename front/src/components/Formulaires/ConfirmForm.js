import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/confirmForm.scss';
import { StyledContainer, Icon, TextBold, StyledButton } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';


const ConfirmForm = ({ projectType, id }) => {
  return (
    <StyledContainer id="confirm-form">
      <Container className="text-center">
        <Row>
          <Col>
            <Icon><i className="fas fa-check"></i></Icon>
            <TextBold>Merci, votre {projectType} a bien été enregistrée !</TextBold>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6" sm="12" xs="12">
            <StyledButton>
              <Link to={`/${projectType}`}>Voir la liste des {projectType}</Link>
            </StyledButton>
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <StyledButton>
              <Link to={`/${projectType}/${id}`}>
                {
                  projectType === 'initiative'
                  ? 'Voir mon initiative'
                  : 'Voir ma mission'
                }
              </Link>
            </StyledButton>
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  )
}

export default ConfirmForm;