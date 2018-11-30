import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/Accueil.scss'

const Ecosysteme = () => (
  <div>
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="11" sm="10" md="9" className="chercher rounded my-5 py-4 px-4">
          <h3 className="text-center">Découvrez l'écosystème</h3>
          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="4" className="text-center">
              <img className="rounded-circle my-2" src="http://placehold.jp/150x150.png" alt="" />
              <p className="my-2">Les inovations managers</p>
            </Col>
            <Col xs="12" sm="12" md="4" className="text-center">
              <img className="rounded-circle my-2" src="http://placehold.jp/150x150.png" alt="" />
              <p className="my-2">Contivation</p>
            </Col>
            <Col xs="12" sm="12" md="4" className="text-center">
              <img className="rounded-circle my-2" src="http://placehold.jp/150x150.png" alt="" />
              <p className="my-2">Inno'space</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="11" sm="10" md="9" className="presentation rounded my-5 py-4 px-4">
          <h3 className="text-center">Mes atouts carrières</h3>
          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="6" className="text-center">
              <img className="rounded-circle my-2" src="http://placehold.jp/150x150.png" alt="" />
            </Col>
            <Col xs="12" sm="12" md="6" className="text-center">
              <img className="rounded-circle my-2" src="http://placehold.jp/150x150.png" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Ecosysteme