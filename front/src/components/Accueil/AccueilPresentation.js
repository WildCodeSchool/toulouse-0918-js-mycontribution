import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { StyledContainer, Text, Subtitle } from '../../data/styledComponents';

const AccueilNews = () => ( {
    render() {
        return (
            <StyledContainer >
                <Container fluid>
                    <Row className="d-flex justify-content-center">
                        <Col xs="11" sm="10" md="12" className="rounded">
                            <Subtitle id="presentation mb-4">Qu’est-ce que My Contribution ?</Subtitle>
                            <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duisautem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et ac-cumsan et iusto odio dignissim qui blandit.</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis</Text>
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>

        );
    }
})

export default AccueilNews;