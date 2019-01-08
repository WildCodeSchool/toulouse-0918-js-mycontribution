import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Icon } from '../data/styledComponents';
import '../css/SingleProject.scss';
import SingleProject from '../components/Projects/SingleProject';
import axios from 'axios';
import EvenementsList from '../components/Evenements/EvenementsList';
class SingleProjectContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
      error: null,
      project: [],
			loaded:false,
			events: []
    }
	}

	componentDidMount() {
		this.fetchSingleProject();
		this.fetchEventsProject();
  }
	
	fetchSingleProject() {
    axios.get(`/api/project/${this.props.match.url}`)
      .then(res => res.data)
      .then(project => this.setState({ project: project, loaded:true }))
      .catch(error => this.setState({ error }))
	}

	fetchEventsProject() {
    axios.get(`/api/event?projectId=${this.props.match.params.id}`)
      .then(res => res.data)
      .then(events => this.setState({ events: events, loaded:true }))
      .catch(error => this.setState({ error }))
	}
	
	render() {
		const { project } = this.state;
		const { events } = this.state;
		
		return (
			<Container fluid id="single-project" className="mb-5">
				<Row className="d-flex justify-content-center" style={{marginTop: '100px'}}>
					<Col lg="1">
						<Link to={`/${this.state.project.projectType}`}>
							<Icon>
								<i className="fas fa-arrow-circle-left fa-2x fa-fw black"></i>
							</Icon>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col>
						<SingleProject project={this.state.project} />
					</Col>
				</Row>
	
				{
					project && project.projectType === 'initiative'
					&&  <Row className="my-5">
								<Col>
									<EvenementsList evenements={events} />
								</Col>
							</Row>
				}
			</Container>
		);
	}
}

export default SingleProjectContainer;