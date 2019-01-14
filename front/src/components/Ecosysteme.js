import React from 'react';
import { StyledContainer, Line, Subtitle, EcoCard, EcoCardWhite } from '../data/styledComponents'

import { Container, Row, Col } from 'reactstrap';
import '../css/lists.scss'

import innospace from '../img/Innospace.jpg';
import contivation from '../img/contivation.jpg';
import RH from '../img/RH.jpg';
import automotive from '../img/automotive.jpg';
import iwantyou from '../img/iwantyou.jpg';

const Ecosysteme = () => (
  <div>
    <StyledContainer className="lists">
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
                  <a href="https://contivation.conti.de/" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-circle my-2 border border-white" src={contivation} alt="Contivation" />
                  </a>
                </Col>
                <Col xs="12" sm="12" md="6" className="text-center">
                  <a href="http://connext.conti.de/communities/service/html/communitystart?communityUuid=33b80990-d7f8-465e-8dcf-33fe2041fbd3" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-circle my-2 border border-white" src={innospace} alt="Innospace" />
                  </a>
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
                  <a href="http://connext.conti.de/communities/service/html/communitystart?communityUuid=012ae2c8-fef4-4101-812f-3dd2fa5c8bee" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-circle my-2  border border-dark" src={iwantyou} alt="Marque employeur et recrutement France" />
                  </a>  
                </Col>
                <Col xs="12" sm="12" md="4" className="text-center">
                  <a href="http://connext.conti.de/communities/service/html/communitystart?communityUuid=2ea2e454-51d3-4ffb-b156-60f37fa6e41f" target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid my-2 border-white" src={RH} alt="Communauté RH France sur Connex" />
                  </a>
                </Col>
                <Col xs="12" sm="12" md="4" className="text-center">
                  <a href="http://connext.conti.de/communities/service/html/communitystart?communityUuid=094b6749-f376-46f9-8420-f3f0d64034a6" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-circle my-2 border border-dark" src={automotive} alt="Formation automotive" />
                  </a>
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