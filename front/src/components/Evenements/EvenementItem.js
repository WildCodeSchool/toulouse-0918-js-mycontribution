import React, { Component } from 'react';
import '../../css/evenementItem.scss';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';
import {
  Text, Subtitle, EventCard, MiddleText, TextHeavy
} from '../../data/styledComponents';
import { Link } from 'react-router-dom';
import { formatText } from '../../helpers/formatText';

class EvenementItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  description = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const {
      eventDate, eventHour, eventPlace, eventDesc, eventName, projectId
    } = this.props;
    const { isOpen } = this.state;
    return (
      <EventCard className="mb-3 event-item">
        <Container>
          <Row>
            <Col>
              <Container fluid>
                <Row className="mt-2">
                  <Subtitle>
                    <Link to={`/initiative/${projectId}`} >
                        {eventName}
                    </Link>
                  </Subtitle>
                </Row>
                <Row className="mt-2">
                  <Col className="p-0" lg="4">
                    <Text style={{ display: 'inline-flex', marginBottom: '0rem' }} className="mr-3">
                      <i className="fas fa-calendar-alt fa-fw mr-2" />
                      {
                        moment(eventDate).subtract(10, 'days').calendar()
                      }
                    </Text>
                  </Col>
                  <Col className="p-0" lg="4">
                  <Text style={{ display: 'inline-flex', marginBottom: '0rem' }}>
                      <i className="fas fa-clock fa-fw mr-2" />
                      {
                        eventHour.slice(0, 5)
                      }
                    </Text>
                  </Col>
                  <Col className="p-0" lg="4">
                  <Text>
                      <i className="fas fa-map-marker-alt fa-fw mr-2" />
                      {eventPlace}
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <div>
                  <TextHeavy className="mt-2" style={{ marginBottom: '0rem' }}>
                    Description 
                    <i
                      className="fas fa-sort-down fa-fw ml-1"
                      onClick={this.description}
                      style={{ cursor: 'pointer' }}
                    />
                  </TextHeavy>
                    {
                      isOpen && formatText(eventDesc)
                    }
                  </div>
                </Row>
              </Container>
            </Col>
            <Col xs="12" lg="2" className="d-flex justify-content-end mr-3 mt-5">
              <Link to={`/initiative/${projectId}`}>
                <i className="fas fa-lightbulb fa-3x"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </EventCard>
    );
  }
}

export default EvenementItems;
