import React from 'react'
import { Text, Subtitle, ContainerPrizes, InitiativeCard, StyledContainer, Icon } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';

const ProjectItems = () => (
    <InitiativeCard>
        <Container>
            <Row>
                <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
                    <img src="https://dummyimage.com/150x150/000/fff" className="rounded img-fluid"/>
                </Col>
                
                <Col className="mt-3">
                    <Container fluid>
                    <Row>
                        <Col className="p-0">
                        <Subtitle>Titre de l'initiative</Subtitle>
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

                <Col lg="2" className="d-flex align-items-center">
                    <ContainerPrizes className="d-flex justify-content-around" orange>
                            <Icon className="mr-3"><i className="fas fa-trophy fa-fw " ></i></Icon>
                            <Icon><i className="fas fa-handshake fa-fw" ></i></Icon>
                    </ContainerPrizes>
                </Col>

                <Col xs="12" lg="2" className="icon d-flex align-items-center justify-content-end mr-3">
                    <i className="far fa-heart fa-3x fa-fw" ></i>
                </Col>
            </Row>
        </Container>
    </InitiativeCard>
  )

export default ProjectItems;