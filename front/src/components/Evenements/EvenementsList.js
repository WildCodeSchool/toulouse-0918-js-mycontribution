import React  from 'react';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents'
import { Container, Row, Col } from 'reactstrap';
import EvenementItem from './EvenementItem';
import '../../css/evenementsList.scss';

const EvenementsList = ({ events, project }) => (
    <StyledContainer className="evenement-list">
      <Container>
        <Row>
          <Col>
              <Subtitle>
                  <i className="fas fa-calendar-alt fa-fw mr-2"></i>
                  Prochains évènements
              </Subtitle>
              <Line/>
          </Col>
        </Row>

        <Row className="mt-5" >
          <Col>
            {
              events.map((event, index) =>
                <EvenementItem
                  key={index}
                  {...event}
                  {...project}
                />
              )      
            }
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  )

export default EvenementsList;