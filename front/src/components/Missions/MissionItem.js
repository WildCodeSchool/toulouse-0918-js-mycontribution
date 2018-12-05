import React from 'react'
import { Text, Subtitle, Competence, MissionCard } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';

const ProjectItems = ({ contact, description, endDate, logo, name, price, sponsor, startDate, summary, team, wantedSkill }) => (
    <MissionCard className="mb-5">
        <Container>
            <Row>
                <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
                    <img src={logo} className="rounded img-fluid"/>
                </Col>
                
                <Col className="mt-3">
                    <Container fluid>
                    <Row>
                        <Text white>
                        <i className="fas fa-calendar-alt fa-fw mr-3 icons"></i>
                        {startDate}
                        </Text>

                        <Text white>
                        <i className="fas fa-calendar-alt fa-fw mr-3 icons"></i>
                        {endDate}
                        </Text>
                    </Row>
                    <Row>
                        <Col className="p-0">
                        <Subtitle white>{name}</Subtitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-0">
                            { 
                                wantedSkill !== ''
                                ? wantedSkill.split(',').map((skill, key) => {
                                    return (
                                        <Competence>{skill}</Competence>
                                    )
                                    
                                })
                                : ''
                            }
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