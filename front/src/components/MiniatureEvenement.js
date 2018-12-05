import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/MiniatureEvenement.scss'

const MiniatureEvenement = (props) => (
  <div>
    <Container className="miniature-evenement my-4">
      <Row>
        <Col xs="3"><img src={props.logo} alt="" /></Col>
        <Col xs="9">
          <Row>
            <Col xs="3">{props.dateEvent}</Col>
            <Col xs="3">{props.dateHour}</Col>
            <Col xs="3">{props.datePlace}</Col>
          </Row>
          <Row>
            <Col xs="12">
            {props.eventName}
            </Col>
          </Row>
          <Row>
            <Col xs="12">
            {props.description}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)

export default MiniatureEvenement