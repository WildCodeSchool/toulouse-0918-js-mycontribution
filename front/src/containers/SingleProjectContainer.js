import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Icon } from '../data/styledComponents';
import '../css/SingleProject.scss';
import SingleProject from '../components/Projects/SingleProject';
import EvenementsList from '../components/Evenements/EvenementsList';
import { eventsFetchRequest, eventsFetchSuccess, eventsFetchError } from '../actions/actionsEvents'
import { connect } from 'react-redux';
import instance from '../helpers/instance';

class SingleProjectContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
      error: null,
      project: {},
			loaded:false,
			events: []
    }
	}

	componentDidMount() {
		this.fetchSingleProject();
		this.fetchEventsProject();
  }
	
	fetchSingleProject() {
    instance.get(`/api/project/${this.props.match.url}`)
      .then(res => res.data)
      .then(project => this.setState({ project: project, loaded:true }))
      .catch(error => this.setState({ error }))
	}

	fetchEventsProject() {
		this.props.eventsFetchRequest()
    instance.get(`/api/event?projectId=${this.props.match.params.id}`)
      .then(res => res.data)
      .then(events => this.props.eventsFetchSuccess(events))
      .catch(error => this.props.eventsFetchError(error.response.data))
	}
	
	render() {
    // Attention ici, redondance entre events dans state local et dans Redux
    const { project, events } = this.state;
    const { user } = this.props;
    const isMine = user && user.id === project.userId;
		return (
			<Container fluid id="single-project" className="mb-5">
				<Row className="icon-back d-flex justify-content-center">
					<Col lg="1">
							<Icon onClick={() => this.props.history.goBack()}>
								<i className="fas fa-arrow-circle-left fa-2x fa-fw black"></i>
							</Icon>
					</Col>
				</Row>
				<Row>
					<Col>
            { project && <SingleProject project={project} isMine={isMine} /> }
					</Col>
				</Row>
				{
					project && project.projectType === 'initiative'
					&&  <Row>
								<Col>
                  <EvenementsList
                    events={events}
                    project={project}
                    marginTop="50px" />
								</Col>
							</Row>
				}
			</Container>
		);
	}
}

const mapStateToProps = state => ({
  events: state.events.events,
  loading: state.events.loading,
  error: state.events.error,
  user: state.auth.user
})

const mapDispatchToProps = {
  eventsFetchRequest, eventsFetchSuccess, eventsFetchError
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProjectContainer)
