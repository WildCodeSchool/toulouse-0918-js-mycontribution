import React  from 'react';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents'
import { Container, Row, Col } from 'reactstrap';
import MissionItem from './MissionItem';

const MissionsList = ({ projects }) => (
  <StyledContainer style={{marginTop: "10%"}}>
    <Container>
      <Row>
        <Col>
          <Subtitle>
            <i className="fas fa-rocket fa-fw mr-2"></i>
            Toutes les missions
          </Subtitle>
          <Line/>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <MissionItem />

          {
          projects.map((mission,index) =>
            <MissionItem
            key={index}
            {...mission}
            />
            )      
          }
        </Col>
      </Row>
    </Container>
  </StyledContainer>
  )

export default MissionsList;