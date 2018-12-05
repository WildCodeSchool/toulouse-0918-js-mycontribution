import React  from 'react';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents'
import { Container, Row, Col } from 'reactstrap';
import EvenementItem from './EvenementItem';

const EvenementsList = ({ evenements }) => (
    <StyledContainer style={{marginTop: "10%"}}>
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

        <Row className="mt-5">
          <Col>
            <EvenementItem />
            
            {/* {
              evenements.map((evenement, index) =>
                <EvenementItem
                  key={index}
                  {...evenement}
                />
              )      
            } */}
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  )

export default EvenementsList;