import React, { Component } from 'react';
import SingleProject from '../components/Projects/SingleProject';
import EventsProject from '../components/Projects/EventsProject';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

class SingleProjectContainer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>

                </Row>
                <Row>
									<Col>
										<SingleProject />
									</Col>
                </Row>
								<Row>
									<Col>
										<EventsProject />
									</Col>
								</Row>
            </Container>
        );
    }
}

export default SingleProjectContainer;