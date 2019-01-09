import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents';
import EvenementItem from './EvenementItem';

const EvenementsList = ({ events }) => (
  <StyledContainer style={{ marginTop: '10%' }}>
    <Container>
      <Row>
        <Col>
          <Subtitle>
            <i className="fas fa-calendar-alt fa-fw mr-2" />
            Prochains évènements
          </Subtitle>
          <Line />
        </Col>
      </Row>

      <Row>
        <Col>
          {
            events.map((event, index) => (
              <EvenementItem
                key={index}
                {...event}
              />
            ))
          }
        </Col>
      </Row>
    </Container>
  </StyledContainer>
);

export default EvenementsList;
