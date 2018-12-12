import React from 'react';
import '../../css/SingleProject.scss';
import { Container, Row, Col } from 'reactstrap';
import { StyledContainer, Text, Title, Subtitle, Competence, RewardContainer, TextBold } from '../../data/styledComponents';

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
					<Title>Title goes here</Title>
				</Row>
				<Row className="d-flex justify-content-center mt-3">
					<Col lg="10">
						<Text>
							Exercitation reprehenderit aliqua irure est commodo sunt laborum dolore excepteur elit reprehenderit mollit mollit. Lorem veniam irure tempor enim veniam fugiat labore sunt nulla voluptate ad laborum sit aute. Tempor occaecat id dolore quis ex laboris enim mollit laborum qui qui amet exercitation. Dolore laborum eu sunt minim occaecat culpa Lorem et adipisicing excepteur.
							Mollit nostrud deserunt non anim voluptate cillum elit anim eu ipsum exercitation et consequat. Dolor duis nostrud elit ea exercitation excepteur cillum. Reprehenderit anim nulla ipsum laboris pariatur laboris non. Ipsum non enim reprehenderit exercitation eiusmod excepteur aliquip veniam. Sit ea occaecat aliquip duis laborum.
						</Text>
					</Col>
				</Row>

				<Row className="d-flex justify-content-around my-5">
					<Col lg="5" >
						<RewardContainer orange >
							<Container >
								<Row className="d-flex justify-content-center">
									<Col lg="2">
										<i className="fas fa-trophy fa-3x fa-fw" ></i>
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
										<i className="fas fa-handshake fa-3x fa-fw" ></i>
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

				<Row>
					<Col>
						<Subtitle>
							<i className="fas fa-envelope fa-fw" ></i>
							Contact
						</Subtitle>
						<Text>
							email goes here
						</Text>
					</Col>
				</Row>
				<Row>
					<Col>
						<Subtitle>
							<i className="fas fa-users fa-fw" ></i>
							Equipe projet
						</Subtitle>
						<Text>
							equipe goes here
						</Text>
					</Col>
				</Row>
				<Row>
					<Col>
						<Subtitle>
							<i className="fas fa-cogs fa-fw" ></i>
							Compétences recherchées
						</Subtitle>
						{/* {
							skills.map((skill, key) => {
								return(
									<Competence>{skill}</Competence>
								)
							})
						} */}
					</Col>
				</Row>
			</Container>
		</StyledContainer>
	)

export default SingleProject;