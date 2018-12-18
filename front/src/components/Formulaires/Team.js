import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { TextBold, Line, TextHeavy } from '../../data/styledComponents';

const Team = ({ projectType }) => (
  <Row className="mt-5">
    <Col>
      <TextBold className="m-0">
        <i className="fas fa-users mr-2"></i>
        Equipe projet (optionnel)
        </TextBold>
      <Line></Line>
      <FormGroup className="mt-3">
        <TextHeavy>
          <Input type="textarea" name="equipe" placeholder="Entrez les noms des personnes qui mènent le projet" />
        </TextHeavy>
      </FormGroup>
    </Col>
  </Row>
)

export default Team;