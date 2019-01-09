import React from 'react'
import '../../css/missionItem.scss'
import { Link } from 'react-router-dom';
import { Text, SubtitleLink, Competence, MissionCard } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

const MissionItem = ({ projectType, endDate, logo, name, startDate, skills, id, onClick }) =>
  (
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
                  <i className="fas fa-calendar-alt fa-fw icons"></i>
                  {
                    moment(startDate).format("Do MMM YYYY, h:mm")
                  }
                </Text>

                <Text white>
                  <i className="fas fa-calendar-alt fa-fw icons"></i>
                  {
                    moment(endDate).format("Do MMMM YYYY, h:mm")
                  }
                </Text>
              </Row>
              <Row className="mt-3">
                <Col className="p-0">
                  <Link to={`/${projectType}/${id}`} >
                    <SubtitleLink>{name}</SubtitleLink>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col className="p-0">
                  {
                    skills !== ''
                      && skills && skills.split(',').map((skill, key) => {
                        return (
                          <Competence key={key}>{skill}</Competence>
                        )
                      })
                  }
                </Col>
              </Row>
              <Row>
                <Col className="p-0">
                  <Text className="mt-3" white>
                    Description
                    <i className="fas fa-sort-down fa-fw ml-1"></i>
                  </Text>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col xs="12" lg="2" className="icon d-flex align-items-center justify-content-end mr-3">
            <i 
            onClick={() => onClick}
            className="far fa-heart fa-3x fa-fw" ></i>
          </Col>
        </Row>
      </Container>
    </MissionCard>
  )

export default MissionItem;