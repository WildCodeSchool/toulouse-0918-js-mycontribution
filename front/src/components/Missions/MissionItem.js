import React, { Component } from 'react'
import '../../css/missionItem.scss'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';
import {
  Text, SubtitleLink, Competence, MissionCard, MiddleText
} from '../../data/styledComponents';

class MissionItem extends Component {
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
      projectType, endDate, logo, name, startDate, wantedSkill, id, description
    } = this.props;
    const { isOpen } = this.state;
    return (
      <MissionCard className="mb-3 mission-item">
        <Container>
          <Row>
            <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
              <img src={logo} className="rounded img-fluid" alt={`logo-${name}`} />
            </Col>

            <Col className="mt-3">
              <Container fluid>
                <Row>
                  <Text white className="mr-4">
                    <i className="fas fa-calendar-alt fa-fw icons" />
                    {
                      moment(startDate).format('Do MMM YYYY, h:mm')
                    }
                  </Text>

                  <Text white>
                    <i className="fas fa-calendar-alt fa-fw icons" />
                    {
                      moment(endDate).format('Do MMMM YYYY, h:mm')
                    }
                  </Text>
                </Row>
                <Row>
                  <Col className="p-0">
                    <Link to={`/${projectType}/${id}`}>
                      <SubtitleLink>{name}</SubtitleLink>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col className="p-0">
                    {
                      wantedSkill !== ''
                        ? wantedSkill && wantedSkill.split(',').map((skill, key) => (
                          <Competence key={key}>{skill}</Competence>
                        ))
                        : ''
                    }
                  </Col>
                </Row>
                <Row>
                  <Text style={{ marginBottom: '0rem' }}>
                    Description <i
                      className="fas fa-sort-down fa-fw ml-1"
                      onClick={this.description}
                      style={{ cursor: 'pointer' }}
                    />
                    {
                      isOpen
                        ? <MiddleText>{description}</MiddleText>
                        : ''
                    }
                  </Text>
                </Row>
              </Container>
            </Col>

            <Col xs="12" lg="2" className="icon d-flex align-items-center justify-content-end mr-3">
              <i className="far fa-heart fa-3x fa-fw" />
            </Col>
          </Row>
        </Container>
      </MissionCard>
    );
  }
}

export default MissionItem;
