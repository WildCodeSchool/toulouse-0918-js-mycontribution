import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Icon } from '../data/styledComponents';
import '../css/SingleProject.scss';
import SingleProject from '../components/Projects/SingleProject';
import EventsProject from '../components/Projects/EventsProject';
import axios from 'axios';

class SingleProjectContainer extends Component {
	render() {
		return (
			<Container fluid id="single-project">
				<Row className="d-flex justify-content-center" style={{marginTop: '100px'}}>
					<Col lg="1">
						<Icon>
							<i className="fas fa-arrow-circle-left fa-2x fa-fw black" ></i>
						</Icon>
					</Col>
				</Row>
				<Row>
					<Col>
						<SingleProject />
					</Col>
				</Row>
				<Row className="my-5">
					<Col>
						<EventsProject />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default SingleProjectContainer;