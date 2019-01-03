import React from 'react';
import { Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents';
import MissionItem from '../Missions/MissionItem';
import InitiativeItem from '../Initiatives/InitiativeItem';
import ButtonsProfil from './ButtonsProfil';

const ProfilFavoriteList = ({ projects }) => (
  <StyledContainer className="mt-5">
    <ButtonsProfil />
    <Row>
      <Col>
        <Subtitle>
          <i className="fas fa-heart fa-fw mr-2" />
          Mes favoris
        </Subtitle>
        <Line />
      </Col>
    </Row>
    <Row>
      <Col>
        {projects && projects.filter(project => project.projectType === 'mission').map((mission) => <MissionItem key={mission.id} {...mission} />)}
        {projects && projects.filter(project => project.projectType === 'initiative').map((initiative) => <InitiativeItem key={initiative.id} {...initiative} />)}
      </Col>
    </Row>
  </StyledContainer>
);

export default ProfilFavoriteList;
