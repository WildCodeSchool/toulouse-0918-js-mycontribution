import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { BigTitle, StyledContainer, Text, Subtitle, Line, Title, Competence, MissionCard, EventCard } from '../../data/styledComponents';

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
                        <MissionCard>
                        <Container>
                            <Row>
                            <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
                                <img src="https://dummyimage.com/150x150/000/fff" className="rounded img-fluid"/>
                            </Col>
                            
                            <Col className="mt-3">
                                <Container fluid>
                                <Row>
                                    <Text white>
                                    <i className="fas fa-calendar-alt fa-fw mr-3 icons"></i>
                                    JJ/MM/AAAA
                                    </Text>
                                </Row>
                                <Row>
                                    <Col className="p-0">
                                    <Subtitle white>Titre de la mission</Subtitle>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="p-0">
                                    <Competence>Compétence 1</Competence>
                                    <Competence>Compétence 2</Competence>
                                    <Competence>Compétence 3</Competence>
                                    <Competence>Compétence 4</Competence>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="p-0">
                                    <Text className="mt-3" white>
                                        Description 
                                        <i className="fas fa-sort-down fa-fw ml-1"></i>
                                    </Text>
                                    </Col>
                                </Row>
                                </Container>
                            </Col>

                            <Col xs="12" lg="2" className="icon d-flex align-items-center justify-content-end mr-3">
                                <i className="far fa-heart fa-3x fa-fw" ></i>
                            </Col>
                            </Row>
                        </Container>
                        </MissionCard>
                    </Col>
                    </Row>
                </Container>
            </StyledContainer>

        );
    }
})

export default AccueilNews;