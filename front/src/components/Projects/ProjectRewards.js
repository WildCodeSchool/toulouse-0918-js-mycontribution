import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Text, RewardContainer, TextBold, Icon } from '../../data/styledComponents';



const ProjectRewards = ({ sponsor, price}) => (
	<Row className="d-flex justify-content-around my-5">
		{
			price !== ''
			&& <Col lg="5" >
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
									{price}
								</Text>
							</Col>
						</Row>
					</Container>
				</RewardContainer>
			</Col>
		}

		{
			sponsor !== ''
			&& <Col lg="5">
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
										{sponsor}
									</Text>
								</Col>
							</Row>
						</Container>
					</RewardContainer>
				</Col>
		}
		

		
	</Row>
)

export default ProjectRewards;