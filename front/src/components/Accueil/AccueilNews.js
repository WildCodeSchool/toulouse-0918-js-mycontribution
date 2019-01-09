import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { connect } from 'react-redux';
import axios from 'axios';
import { StyledContainer, Subtitle, Line } from '../../data/styledComponents';
import MissionItem from '../Missions/MissionItem';
import EvenementItem from '../Evenements/EvenementItem';
import { eventsFetchRequest, eventsFetchSuccess, eventsFetchError } from '../../actions/actionsEvents';

class AccueilNews extends Component {

  componentDidMount() {
    const {
      eventsFetchRequest, eventsFetchSuccess, eventsFetchError
    } = this.props;
    eventsFetchRequest();
    axios.get('/api/event')
      .then(res => res.data)
      .then(events => eventsFetchSuccess(events))
      .catch(error => eventsFetchError(error.response.data));
  }

  // componentDidUpdate(prevProps) {
  //   const { user } = this.props;
  //   const { slice } = this.state;
  //   if (user !== prevProps.user) {
  //     console.log(user.id)
  //     if (user.id) {
  //       this.setState({ slice: slice + 3 });
  //     }
  //     this.setState({ slice: 3 })
  //   }
  // }


  render() {
    const { events, slice } = this.props;
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
          <Row>
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
              <MissionItem />
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
  slice: state.auth.slice
});

const mapDispatchToProps = {
  eventsFetchRequest, eventsFetchSuccess, eventsFetchError
};

export default connect(mapStateToProps, mapDispatchToProps)(AccueilNews);
