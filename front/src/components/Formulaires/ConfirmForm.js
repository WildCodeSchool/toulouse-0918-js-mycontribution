import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/confirmForm.scss';
import { StyledContainer, Icon, TextBold, ButtonForm } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';


const ConfirmForm = ({ match: { params: { projectType, id }} }) => {
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
          <Col lg="4" sm="12" xs="12">
            <Link className="btn btn-form" to={`/${projectType}`}>Voir la liste des {projectType}s</Link>
          </Col>
          <Col lg="4"  sm="12" xs="12">
            <Link className="btn btn-form" to={`/${projectType}/${id}`}>
                {
                  projectType === 'initiative'
                  ? 'Voir mon initiative'
                  : 'Voir ma mission'
                }
            </Link>
          </Col>
          <Col lg="4" sm="12" xs="12">
            <Link className="btn btn-form" to={`/creer-${projectType}`}>Créer une autre {projectType}</Link>
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  )
}

export default ConfirmForm;