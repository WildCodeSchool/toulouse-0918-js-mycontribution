import React from 'react';
import '../../css/SingleProject.scss';
import { Container, Row, Col } from 'reactstrap';
import { StyledContainer, Text, Title, Subtitle } from '../../data/styledComponents';

const SingleProject = ({ project }) => 
    (
        <StyledContainer id="single-project">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col lg="1">
											<i className="far fa-heart fa-3x fa-fw" ></i>
                    </Col>
										<Col lg="1" className="">
											<i className="far fa-edit fa-fw" ></i>
										</Col>
                </Row>

								<Row className="d-flex justify-content-center mt-5">
									<Col lg="12" className="d-flex justify-content-center">
										<img src="https://dummyimage.com/150/0000" />
									</Col>
								</Row>

								<Row className="d-flex justify-content-center mt-5">
										<Subtitle>Title</Subtitle>
									</Row>
            </Container>
        </StyledContainer>
    )

export default SingleProject;