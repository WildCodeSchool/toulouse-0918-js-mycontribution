import React from 'react'
import { Text, Subtitle, Competence, MissionCard } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';

const ProjectItems = () => (
    <MissionCard className="mb-5">
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
  )

export default ProjectItems;