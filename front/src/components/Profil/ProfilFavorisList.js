import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents';
import MissionItem from '../Missions/MissionItem';

const ProfilMissionList = ({ projects }) => (
  <StyledContainer className="mt-5">
    <Container>
      <Row className="text-center d-flex justify-content-around mb-5">
        <div>
          <Link activeClassName="active" to="test.com">
            <i className="fas fa-heart" style={{ color: 'black', fontSize: '8vh' }} />
          </Link>
        </div>
        <div>
          <Link activeClassName="active" to="/profil/initiative">
            <i className="fas fa-lightbulb" style={{ color: 'black', fontSize: '8vh' }} />
          </Link>
        </div>
        <div className="text-center">
          <Link activeClassName="active" to="/profil/mission">
            <i className="fas fa-rocket" style={{ color: 'black', fontSize: '8vh' }} />
          </Link>
        </div>
      </Row>
    </Container>
    <Row>
      <Col>
        <Subtitle>
          <i className="fas fa-lightbulb fa-fw mr-2" />
          Mes missions
        </Subtitle>
        <Line />
      </Col>
    </Row>
    <Row>
      <Col>
        { projects && projects.map((mission, id) => <MissionItem id={id} {...mission} />)}
      </Col>
    </Row>
  </StyledContainer>
);
export default ProfilMissionList;
