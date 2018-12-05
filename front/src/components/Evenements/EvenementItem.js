import React from 'react'
import { Text, Subtitle, EventCard, Icon } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';

const EvenementItems = () => (
    <EventCard className="mt-3">
        <Container>
            <Row>
                <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
                    <img src="https://dummyimage.com/150x150/000/fff" className="rounded img-fluid" />
                </Col>

                <Col>
                    <Container fluid>
                    <Row className="mt-3">
                        <Subtitle>Mon super titre</Subtitle>
                    </Row>
                    <Row>
                        <Col className="p-0">
                        <Text style={{display: 'inline-flex'}} className="mr-3">
                            <i className="fas fa-calendar-alt fa-fw mr-2"></i>
                            JJ/MM/AAAA
                        </Text>
                        <Text style={{display: 'inline-flex'}}>
                            <i className="fas fa-clock fa-fw mr-2"></i>
                            hh:mm
                        </Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-0"> 
                        <Text>
                            <i className="fas fa-map-marker-alt fa-fw mr-2"/>
                            Derrière le restaurant d'entreprise
                        </Text>
                        </Col> 
                    </Row>
                    <Row>
                        <Text>
                        Description
                        <i className="fas fa-sort-down fa-fw ml-1"></i>
                        </Text>
                    </Row>
                    </Container>
                </Col>

                <Col xs="12" lg="2" className="d-flex align-items-center justify-content-end mr-3">
                    <i className="fas fa-lightbulb fa-3x"></i>
                </Col>
            </Row>
        </Container>
    </EventCard>
  )

export default EvenementItems;