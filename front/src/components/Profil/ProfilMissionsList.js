import React from 'react';
import { Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents';
import MissionItem from '../Missions/MissionItem';
import ButtonsProfil from './ButtonsProfil';

const ProfilMissionList = ({ projects }) => (
  <StyledContainer className="mt-5">
    <ButtonsProfil />
    <Row>
      <Col>
        <Subtitle><i className="fas fa-rocket fa-fw mr-2" />Mes missions</Subtitle>
        <Line />
      </Col>
    </Row>
    <Row className="mt-3">
      <Col>
        {
          projects && projects.map((mission) => <MissionItem key={mission.id} {...mission} />)
        }
      </Col>
    </Row>
  </StyledContainer>
);

export default ProfilMissionList;
