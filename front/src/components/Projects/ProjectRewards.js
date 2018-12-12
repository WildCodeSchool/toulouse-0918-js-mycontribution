import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Text, RewardContainer, TextBold, Icon } from '../../data/styledComponents';



const ProjectRewards = ({ sponsors, price}) => (
	<Row className="d-flex justify-content-around my-5">
		<Col lg="5" >
			<RewardContainer orange >
				<Container >
					<Row className="d-flex justify-content-center">
						<Col lg="2">
							<Icon>
								<i className="fas fa-trophy fa-x fa-fw" ></i>
							</Icon>
						</Col>
					</Row>
					<Row className="text-center">
						<Col>
							<TextBold>Récompenses</TextBold>
						</Col>
					</Row>
					<Row>
						<Col>
							<Text>
								Incididunt ullamco cillum est Lorem voluptate proident consectetur eu veniam labore sit. Nostrud ullamco consectetur id est enim laboris ea est minim dolore commodo sit.
							</Text>
						</Col>
					</Row>
				</Container>
			</RewardContainer>
		</Col>

		<Col lg="5">
			<RewardContainer orange>
				<Container>
					<Row className="d-flex justify-content-center">
						<Col lg="2">
							<Icon>
								<i className="fas fa-handshake fa-fw" ></i>
							</Icon>
							
						</Col>
					</Row>
					<Row className="text-center">
						<Col>
							<TextBold>Sponsors</TextBold>
						</Col>
					</Row>
					<Row>
						<Col>
							<Text>
								Incididunt ullamco cillum est Lorem voluptate proident consectetur eu veniam labore sit. Nostrud ullamco consectetur id est enim laboris ea est minim dolore commodo sit.
							</Text>
						</Col>
					</Row>
				</Container>
			</RewardContainer>
		</Col>
	</Row>
)

export default ProjectRewards;