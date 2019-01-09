import React  from 'react';
import '../../css/lists.scss';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents'
import { Container, Row, Col } from 'reactstrap';
import InitiativeItem from './InitiativeItem';

const InitiativesList = ({ projects }) => (
    <StyledContainer className="lists">
      <Container>
        <Row>
          <Col>
              <Subtitle>
                  <i className="fas fa-lightbulb fa-fw mr-2"></i>
                  Toutes les initiatives
              </Subtitle>
              <Line/>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            {
              projects.map((initiative, index) =>
                <InitiativeItem
                  key={index}
                  {...initiative}
                />
              )      
            }
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  )

export default InitiativesList;