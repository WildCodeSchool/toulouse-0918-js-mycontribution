import React from 'react';
import '../../css/SingleProject.scss';
import { Container, Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents';
import EvenementItem from '../Evenements/EvenementItem'

const EventsProject = ({ project }) =>
	(
		<StyledContainer id="events-project">
			<Container>
				<Row>
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
						<EvenementItem />
					</Col>
				</Row>
			</Container>
		</StyledContainer>
	)

export default EventsProject;