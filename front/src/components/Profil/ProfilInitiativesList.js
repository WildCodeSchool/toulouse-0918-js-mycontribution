import React from 'react';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents'
import { Container, Row, Col } from 'reactstrap';
import InitiativeItem from '../Initiatives/InitiativeItem';
import { Link } from "react-router-dom";

const ProfilListButtons = ({ projects }) => (
  <StyledContainer className="mt-5">
    <Container>
      <Row className="text-center d-flex justify-content-around mb-5">
        <div>
          <Link
            activeClassName="active"
            to="#">
            <i className="fas fa-heart" style={{ color: "black", fontSize: "8vh" }}></i>
          </Link>
        </div>
        <div>
          <Link
            activeClassName="active"
            to="/profil/initiative">
            <i
              className="fas fa-lightbulb"
              style={{ color: "black", fontSize: "8vh" }}>
            </i>
          </Link>
        </div>
        <div className="text-center">
          <Link
            activeClassName="active"
            to="/profil/mission" >
            <i
              className="fas fa-rocket"
              style={{ color: "black", fontSize: "8vh" }}>
            </i>
          </Link>
        </div>
      </Row>
    </Container>
    <Row>
      <Col>
        <Subtitle>
          <i className="fas fa-lightbulb fa-fw mr-2"></i>
          Mes initiatives
        </Subtitle>
        <Line />
      </Col>
    </Row>
    <Row>
      <Col>
        {
          projects && projects.map((initiative, index) =>
            <InitiativeItem
              key={index}
              {...initiative}
            />
          )
        }
      </Col>
    </Row>
  </StyledContainer>
)

export default ProfilListButtons;