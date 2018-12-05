import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { BigTitle, StyledContainer, Text, Subtitle, Line, Title, Competence, MissionCard, EventCard } from '../../data/styledComponents';
import MissionItem from '../Missions/MissionItem'
import EvenementItems from '../Evenements/EvenementItem';


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
                            <EvenementItems />
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