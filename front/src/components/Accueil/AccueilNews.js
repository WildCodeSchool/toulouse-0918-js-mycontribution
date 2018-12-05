import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { BigTitle, StyledContainer, Text, Subtitle, Line, Title, Competence, MissionCard, EventCard } from '../../data/styledComponents';
import MissionItem from '../Missions/MissionItem'


const AccueilNews = () => ( {
    render() {
        return (
            <StyledContainer className="my-5" id="news">
                <Container id="events">
                    <Row className="d-flex justify-content-center">
                    <Col sm="12" >
                        <Subtitle>
                        <i className="fas fa-calendar-alt fa-fw mr-2"></i>
                        Les évènements à venir
                        </Subtitle>
                        <Line />
                    </Col>
                    </Row>

                    <Row>
                    <Col>
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
                    </Col>
                    </Row>
                </Container>

                <Container id="missions" className="mt-5">
                    <Row>
                    <Col>
                        <Subtitle>
                        <i className="fas fa-rocket fa-fw mr-2"></i>
                        Dernières missions
                        </Subtitle>
                        <Line/>
                    </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col>
                            <MissionItem />
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>

        );
    }
})

export default AccueilNews;