import React  from 'react';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents'
import { Container, Row, Col } from 'reactstrap';
import ContributeurItem from './ContributeurItem';

const ContributeursList = ({ contributeurs }) => (
    <StyledContainer style={{marginTop: "10%"}}>
      <Container>
        <Row>
          <Col>
              <Subtitle>
                  <i className="fas fa-users fa-fw mr-2"></i>
                  Tous les contributeurs
              </Subtitle>
              <Line/>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            {
              contributeurs.map((contributeur, index) =>
                <ContributeurItem
                  key={index}
                  {...contributeur}
                />
              )      
            }
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  )

export default ContributeursList;