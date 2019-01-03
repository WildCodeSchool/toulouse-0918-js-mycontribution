import React from 'react';
import { StyledContainer, Line, Subtitle, Title, Text, TextBold, TextHeaderModal, EcoCard, EcoCardWhite } from '../data/styledComponents'

import { Container, Row, Col } from 'reactstrap';
import '../css/Accueil.scss'

import innospace from '../img/Innospace.jpg';
import contivation from '../img/contivation.jpg';
import RH from '../img/RH.jpg';
import automotive from '../img/automotive.jpg';
import iwantyou from '../img/iwantyou.jpg';

const Ecosysteme = () => (
  <div>
    <StyledContainer style={{ marginTop: "10%" }}>
      <Container>
        <Row>
          <Col>
            <Subtitle>
            <i className="fas fa-globe-americas fa-fw mr-2"></i>
              Ecosysteme
              </Subtitle>
            <Line />
          </Col>
        </Row>
        <EcoCard  className="mt-5">
          <Row className="d-flex justify-content-around">
            <Col xs="11" sm="10" md="9" className="my-2 py-2 px-2">
              <Subtitle className="text-center">Découvrez l'écosystème collaboration & innovation</Subtitle>

              <Row className=" align-items-center">
                <Col xs="12" sm="12" md="6" className="text-center">
                  <img className="rounded-circle my-2 border border-white" src={contivation} alt="" />
                </Col>
                <Col xs="12" sm="12" md="6" className="text-center">
                  <img className="rounded-circle my-2 border border-white" src={innospace} alt="" />
                </Col>
              </Row>

            </Col>
          </Row>
        </EcoCard>
      </Container>
      <Container>
        <EcoCardWhite>
          <Row className="d-flex justify-content-around">
            <Col xs="11" sm="10" md="9" className="my-2 py-2 px-2">
              <Subtitle  className="text-center">Mes atouts carrières</Subtitle>

              <Row className="align-items-center">
                <Col xs="12" sm="12" md="4" className="text-center">
                  <img className="rounded-circle my-2  border border-dark" src={iwantyou} alt="" />
                </Col>
                <Col xs="12" sm="12" md="4" className="text-center">
                  <img className="img-fluid my-2 border-white" src={RH} alt="" />
                </Col>
                <Col xs="12" sm="12" md="4" className="text-center">
                  <img className="rounded-circle my-2 border border-dark" src={automotive} alt="" />
                </Col>
              </Row>              
            </Col>
          </Row>
        </EcoCardWhite>
      </Container>
    </StyledContainer>

  </div>
)

export default Ecosysteme