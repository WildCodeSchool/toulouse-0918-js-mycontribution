import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import icons from '../../data/icons';
import { StyledContainer, Text, Title } from '../../data/styledComponents';

const AccueilNews = () => ( {
    render() {
        return (
            <StyledContainer orange>
                <Container fluid>
                    <Row className="d-flex justify-content-center">
                    <Col sm="12" className="chercher rounded text-center">
                        <Title>Vous recherchez :</Title>
                        <Row className="d-flex justify-content-between my-5">
                        {
                            icons.map((icon, key)=> {
                            const { fa, text } = icon
                            return (
                                <Col lg="3" md="6" xs="12">
                                <Text>
                                    <i className={`fas ${fa} fa-3x mb-3`} key={key} />
                                    <Text>{text}</Text>
                                </Text>
                                </Col>
                            )
                            })
                        }
                        </Row>
                        <Text>Cliquez sur les icones 
                        <i className="fas fa-calendar-alt mx-2"/>
                        <i className="fas fa-lightbulb mx-2"/>
                        <i className="fas fa-rocket mx-2" />
                        <i className="fas fa-users mx-2" />
                        dans la barre de navigation pour accéder aux différentes listes</Text>
                    </Col>
                    </Row>
                </Container>
            </StyledContainer>

        );
    }
})

export default AccueilNews;