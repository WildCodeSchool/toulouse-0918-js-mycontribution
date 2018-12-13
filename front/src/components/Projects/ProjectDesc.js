import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import {  Text, Title } from '../../data/styledComponents';
import moment from 'moment';

const ProjectDesc = ({ logo, name, description, endDate, startDate }) => (
  <Fragment>
    <Row className="d-flex justify-content-between">
      <Col lg="1">
        <i className="far fa-heart fa-3x fa-fw" ></i>
      </Col>
      <Col lg="10" className="d-flex justify-content-center">
        <Text className="mr-3">
          <i className="far fa-calendar-alt fa-fw" ></i>
          {
            
            moment(startDate).format("Do MMM YYYY, h:mm")

          }
        </Text>
        <Text className="ml-3">
          <i className="far fa-calendar-alt fa-fw" ></i>
          {
            
            moment(endDate).format("Do MMM YYYY, h:mm")

          }
        </Text>
      </Col>
      <Col lg="1" className="">
        <i className="far fa-edit fa-fw" ></i>
      </Col>
    </Row>

    <Row className="d-flex justify-content-center mt-5">
      <Col lg="12" className="d-flex justify-content-center">
        <img src={logo} />
      </Col>
    </Row>
    <Row className="d-flex justify-content-center mt-5">
      <Title>{name}</Title>
    </Row>

    <Row className="d-flex justify-content-center mt-3">
      <Col lg="10">
        <Text>{description}</Text>
      </Col>
    </Row>

  </Fragment>

)

export default ProjectDesc;