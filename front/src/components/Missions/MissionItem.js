import React, { Component } from 'react'
import '../../css/missionItem.scss'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
  Text, TextHeavy, SubtitleLink, Competence, MissionCard
} from '../../data/styledComponents';
import formatText from '../../helpers/formatText';
import formatDate from '../../helpers/formatDate';

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
      projectType, endDate, logo, name, summary, startDate, wantedSkill, id, description
    } = this.props;
    const { isOpen } = this.state;
    return (
      <MissionCard className="mb-3 mission-item">
        <Container>
          <Row>
            <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
              {
                logo && (
                  <img
                    src={logo}
                    className="rounded img-fluid"
                    alt={`logo-${name}`}
                  />
                )
              }
            </Col>

            <Col className="mt-3">
              <Container fluid>
                <Row>
                  <Text className="mr-4">
                    <i className="fas fa-calendar-alt fa-fw icons" />
                    {
                      formatDate(startDate)
                    }
                  </Text>
                  <Text>
                    <i className="fas fa-calendar-alt fa-fw icons" />
                    {
                      formatDate(endDate)
                    }
                  </Text>
                </Row>
                <Row className="my-2">
                  <Col className="p-0">
                    <Link to={`/${projectType}/${id}`}>
                      <SubtitleLink>{name}</SubtitleLink>
                    </Link>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col className="p-0">
                    {summary}
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
                  <TextHeavy onClick={this.description} style={{ marginBottom: '0rem', cursor: 'pointer' }}>
                    Description <i
                      className="fas fa-sort-down fa-fw ml-1"
                    />
                    </TextHeavy>
                    {
                      isOpen && formatText(description)
      
                    }
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
