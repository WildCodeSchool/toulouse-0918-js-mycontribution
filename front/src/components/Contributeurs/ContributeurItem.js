import React from 'react'
import { Text, Subtitle, UserCard, Icon, Competence } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';

const ProjectItems = () => (
    <UserCard className="mt-4">
      <Container>
        <Row>
          <Col lg="2" xs="12" className="d-flex align-items-center justify-content-center">
            <img src="https://dummyimage.com/150x150/000/fff" className="rounded img-fluid" />
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <Container>
              <Row>
                <Col>
                  <Subtitle>Jean Dupond</Subtitle>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Competence>Compétence 1</Competence>
                  <Competence>Compétence 2</Competence>
                  <Competence>Compétence 3</Competence>
                  <Competence>Compétence 4</Competence>
                </Col>
              </Row>
            </Container>

          </Col>

          <Col lg="2" xs="12" className="icon d-flex align-items-center justify-content-end mr-3">
            <Icon>
              <i className="fas fa-envelope fa-fw"></i>
            </Icon>
          </Col>
        </Row>
      </Container>
    </UserCard>
  )

export default ProjectItems;