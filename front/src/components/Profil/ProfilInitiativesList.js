import React from 'react';
import { Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents';
import InitiativeItem from '../Initiatives/InitiativeItem';
import ButtonsProfil from './ButtonsProfil';

const ProfilInitiativesList = ({ projects }) => (
  <StyledContainer className="mt-5">
    <ButtonsProfil />
    <Row>
      <Col>
        <Subtitle><i className="fas fa-lightbulb fa-fw mr-2" />Mes initiatives</Subtitle>
        <Line />
      </Col>
    </Row>
    <Row>
      <Col>
        {
          projects && projects.map((initiative) => <InitiativeItem key={initiative.id} {...initiative} />)
        }
        console.log(projects)

      </Col>
    </Row>
  </StyledContainer>
);

export default ProfilInitiativesList;
