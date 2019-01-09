import React from 'react'
import { Link } from 'react-router-dom';
import { Text, Subtitle, EventCard } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

const EvenementItems = ({ eventDate, eventDesc, eventHour, eventPlace, eventName, projectId, logo }) => (
	<EventCard className="mt-4">
		<Container>
			<Row>
				<Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
					<img src={logo} className="rounded img-fluid" alt={`logo-${eventName}`} />
				</Col>
				<Col>
					<Container fluid>
						<Row className="mt-3">
							<Subtitle>{eventName}</Subtitle>
						</Row>
						<Row>
							<Col className="p-0">
								<Text style={{ display: 'inline-flex' }} className="mr-3">
									<i className="fas fa-calendar-alt fa-fw mr-2"></i>
									{
                  	moment(eventDate).format("DD MMM YYYY")
                	}
								</Text>
								<Text style={{ display: 'inline-flex' }}>
									<i className="fas fa-clock fa-fw mr-2"></i>
									{
                  	moment(eventHour).format('LT')
                	}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col className="p-0">
								<Text>
									<i className="fas fa-map-marker-alt fa-fw mr-2" />
									{eventPlace}
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
					<Link to={`/initiative/${projectId}`}>
						<i className="fas fa-lightbulb fa-3x"></i>
					</Link>
				</Col>
			</Row>
		</Container>
	</EventCard>
)

export default EvenementItems;