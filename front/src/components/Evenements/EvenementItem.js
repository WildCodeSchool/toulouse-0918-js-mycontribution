import React from 'react'
import { Text, Subtitle, EventCard } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';

const EvenementItems = ({ dateEvent, dateHour, datePlace, description, eventName, logo }) => (
	<EventCard className="mt-5">
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
									{dateEvent}
								</Text>
								<Text style={{ display: 'inline-flex' }}>
									<i className="fas fa-clock fa-fw mr-2"></i>
									{dateHour}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col className="p-0">
								<Text>
									<i className="fas fa-map-marker-alt fa-fw mr-2" />
									{datePlace}
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
					<i className="fas fa-lightbulb fa-3x"></i>
				</Col>
			</Row>
		</Container>
	</EventCard>
)

export default EvenementItems;