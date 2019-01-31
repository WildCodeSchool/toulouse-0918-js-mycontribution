import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Text, Title } from '../../data/styledComponents';
import formatText from '../../helpers/formatText';
import formatDate from '../../helpers/formatDate';

const summaryStyle = {
  style: {
    color: '#555',
    width: '80%',
    margin: '0 auto'
  }
};

const ProjectDesc = ({
  id, logo, name, summary, description, endDate, startDate, projectType, isMine
}) => (
  <Fragment>
    <Row className="d-flex justify-content-between">
      <Col lg="1">
        <i className="far fa-heart fa-3x fa-fw" ></i>
      </Col>
      <Col lg="10" className="d-flex justify-content-center">
        <Text className="mr-3">
        <i className="far fa-calendar-alt fa-fw mr-2" ></i>
          {
            formatDate(startDate)
          }
        </Text>
        <Text className="ml-3">
          <i className="far fa-calendar-alt fa-fw mr-2" ></i>
          {
            formatDate(endDate)
          }
        </Text>
      </Col>
      <Col lg="1" className="">
        {
          isMine && (
            <Link to={`/modifier-${projectType}/${id}`}>
              <i className="far fa-edit fa-fw" ></i>
            </Link>
          )
        }
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
        <div className="text-center font-italic text-secondary">
          {
            summary && formatText(summary, summaryStyle)
          }
        </div>
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