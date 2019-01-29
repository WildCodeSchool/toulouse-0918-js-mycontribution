import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { Text, Title } from '../../data/styledComponents';
import moment from 'moment';
import { formatText } from '../../helpers/formatText';

const summaryStyle = {
  style: {
    color: '#555',
    width: '80%',
    margin: '0 auto'
  }
};

const ProjectDesc = ({ logo, name, summary, description, endDate, startDate }) => (
  <Fragment>
    <Row className="d-flex justify-content-between">
      <Col lg="1">
        <i className="far fa-heart fa-3x fa-fw" ></i>
      </Col>
      <Col lg="10" className="d-flex justify-content-center">
        <Text className="mr-3">
        <i className="far fa-calendar-alt fa-fw mr-2" ></i>
          {
            moment(startDate).subtract(10, 'days').calendar()
          }
        </Text>
        <Text className="ml-3">
          <i className="far fa-calendar-alt fa-fw mr-2" ></i>
          {
            moment(endDate).subtract(10, 'days').calendar()
          }
        </Text>
      </Col>
      <Col lg="1" className="">
        <i className="far fa-edit fa-fw" ></i>
      </Col>
    </Row>

    <Row className="d-flex justify-content-center mt-5">
      <Col lg="12" className="d-flex justify-content-center">
        <img src={logo} className="img-fluid" style={{maxWidth: "100%", maxHeight: "300px"}} alt={`${logo}`} />
      </Col>
    </Row>
    <Row className="d-flex justify-content-center mt-5">
      <Title>{name}</Title>
    </Row>

    <Row className="d-flex justify-content-center mt-3">
      <Col lg="10">
        <Text className="text-center font-italic text-secondary">
          {
            summary && formatText(summary, summaryStyle)
          }
        </Text>
      </Col>
    </Row>

    <Row className="d-flex justify-content-center mt-3">
      <Col lg="10">
          <div>
            {
              description && formatText(description)
            }
          </div>
      </Col>
    </Row>
  </Fragment>

)

export default ProjectDesc;