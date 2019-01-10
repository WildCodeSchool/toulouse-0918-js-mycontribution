import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  Styled404, Icon, TextBold, StyledButton
} from '../data/styledComponents';
import '../css/confirmForm.scss';

const Page404 = () => (
  <Styled404 id="confirm-form">
    <Container className="text-center">
      <Row>
        <Col>
          <Icon><i className="fas fa-sad-tear" /></Icon>
          <TextBold style={{ fontSize: '4rem' }}>Page 404</TextBold>
          <TextBold>Cette page n'existe pas</TextBold>
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Col lg="6" md="6" sm="12" xs="12">
          <StyledButton>
            <Link to="/">Retourner à l'accueil</Link>
          </StyledButton>
        </Col>
      </Row>
    </Container>
  </Styled404>
);

export default Page404;
