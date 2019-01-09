import React from 'react'
import { Link } from 'react-router-dom';
import { Text, Subtitle, InitiativeCard } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';
import InitiativeReward from './InitiativeReward';

const InitiativeItem = ({ id, logo, name, projectType, sponsors, prizes }) => (
  
  <InitiativeCard className="mb-3">
    <Container>
      <Row>
        <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
          <img src={logo} className="rounded img-fluid" alt={`img-${name}`} />
        </Col>

        <Col className="mt-3">
          <Container fluid>
            <Row>
              <Col className="p-0">
              <Link to={`/${projectType}/${id}`}>
                <Subtitle>{name}</Subtitle>
              </Link>
                
              </Col>
            </Row>
            <Row>
              <Col className="p-0">
                <Text className="mt-3">
                  Description
                  <i className="fas fa-sort-down fa-fw ml-1"></i>
                </Text>
              </Col>
            </Row>
          </Container>
        </Col>

        {
          (prizes !== '' || sponsors !== '')
          && <InitiativeReward sponsors={sponsors} prizes={prizes} />
          
        }       

        <Col xs="12" lg="2" className="icon d-flex align-items-center justify-content-end mr-3">
          <i className="far fa-heart fa-3x fa-fw" ></i>
        </Col>
      </Row>
    </Container>
  </InitiativeCard>
)

export default InitiativeItem;