import React, { Fragment } from 'react';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import {  TextBold, Line, TextHeavy } from '../../data/styledComponents';

const Sponsors = ({ projectType }) => (
  <Row className="mt-5">
    <Col>
      <TextBold className="m-0">
        <i className="fas fa-handshake mr-2"></i>
        Sponsors (optionnel)
        </TextBold>
      <Line></Line>
      <FormGroup className="mt-3">
        <TextHeavy>
          <Input type="textarea" name="equipe" rows="6" placeholder="Quels sont les sponsors pour ce projet ?" />
        </TextHeavy>
      </FormGroup>
    </Col>
  </Row>
)

export default Sponsors;