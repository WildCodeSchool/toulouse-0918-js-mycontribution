import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import {  Text, Title } from '../../data/styledComponents';

const ProjectDesc = () => (
  <Fragment>
    <Row className="d-flex justify-content-between">
      <Col lg="1">
        <i className="far fa-heart fa-3x fa-fw" ></i>
      </Col>
      <Col lg="1" className="">
        <i className="far fa-edit fa-fw" ></i>
      </Col>
    </Row>

    <Row className="d-flex justify-content-center mt-5">
      <Col lg="12" className="d-flex justify-content-center">
        <img src="https://dummyimage.com/150/0000" />
      </Col>
    </Row>
    <Row className="d-flex justify-content-center mt-5">
      <Title>Title goes here</Title>
    </Row>

    <Row className="d-flex justify-content-center mt-3">
      <Col lg="10">
        <Text>
          Exercitation reprehenderit aliqua irure est commodo sunt laborum dolore excepteur elit reprehenderit mollit mollit. Lorem veniam irure tempor enim veniam fugiat labore sunt nulla voluptate ad laborum sit aute. Tempor occaecat id dolore quis ex laboris enim mollit laborum qui qui amet exercitation. Dolore laborum eu sunt minim occaecat culpa Lorem et adipisicing excepteur.
          Mollit nostrud deserunt non anim voluptate cillum elit anim eu ipsum exercitation et consequat. Dolor duis nostrud elit ea exercitation excepteur cillum. Reprehenderit anim nulla ipsum laboris pariatur laboris non. Ipsum non enim reprehenderit exercitation eiusmod excepteur aliquip veniam. Sit ea occaecat aliquip duis laborum.
						</Text>
      </Col>
    </Row>

  </Fragment>

)

export default ProjectDesc;