import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { connect } from 'react-redux';
import axios from 'axios';
import { StyledContainer, Subtitle, Line } from '../../data/styledComponents';
import MissionItem from '../Missions/MissionItem';
import EvenementItem from '../Evenements/EvenementItem';
import {
  eventsFetchRequest, eventsFetchSuccess, eventsFetchError
} from '../../actions/actionsEvents';
import {
  projectsFetchSuccess, projectsFetchError, projectsFetchRequest
} from '../../actions/actionsProjects';

class AccueilNews extends Component {
  componentDidMount() {
    const {
      eventsFetchRequest, eventsFetchSuccess, eventsFetchError, projectsFetchSuccess, projectsFetchError, projectsFetchRequest
    } = this.props;
    eventsFetchRequest();
    axios.get('/api/event')
      .then(res => res.data)
      .then(events => eventsFetchSuccess(events))
      .catch(error => eventsFetchError(error.response));
    const projecType = 'mission';
    projectsFetchRequest();
    axios.get(`/api/project/${projecType}`)
      .then(res => res.data)
      .then(project => projectsFetchSuccess(projecType, project))
      .catch(error => projectsFetchError(error.response.data));
  }

  render() {
    const { events, slice, mission } = this.props;
    return (
      <StyledContainer className="my-5" id="news">
        <Container id="events">
          <Row className="d-flex justify-content-center">
            <Col sm="12">
              <Subtitle>
                <i className="fas fa-calendar-alt fa-fw mr-2" />Les évènements à venir
              </Subtitle>
              <Line />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              {events.slice(0, `${slice}`).map((event, index) => (
                <EvenementItem
                  key={index}
                  {...event}
                />
              ))
              }
            </Col>
          </Row>
        </Container>

        <Container id="missions" className="mt-5">
          <Row>
            <Col>
              <Subtitle>
                <i className="fas fa-rocket fa-fw mr-2" />Dernières missions
              </Subtitle>
              <Line />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              {mission.slice(0, `${slice}`).map((missions, index) => (
                <MissionItem
                  key={index}
                  {...missions}
                />
              ))
              }
            </Col>
          </Row>
        </Container>
      </StyledContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  events: state.events.events,
  slice: state.auth.slice,
  mission: state.project.mission,
});

const mapDispatchToProps = {
  eventsFetchRequest, eventsFetchSuccess, eventsFetchError, projectsFetchRequest, projectsFetchSuccess, projectsFetchError
};

export default connect(mapStateToProps, mapDispatchToProps)(AccueilNews);
