import React from 'react';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import { TextBold, Line, TextHeavy } from '../../data/styledComponents';

const Reward = ({ projectType, submitForm, onChange }) => (
  <Row className="mt-5">
    <Col>
      <TextBold className="m-0">
        <i className="fas fa-trophy mr-2"></i>
        Récompenses (optionnel)
        </TextBold>
      <Line></Line>
      <FormGroup className="mt-3">
        <TextHeavy>
          <Input 
            type="textarea" 
            name="prizes" 
            rows="6" 
            placeholder="Quels sont les récompenses pour ce projet ?" 
            onChange={onChange}
          />
        </TextHeavy>
      </FormGroup>
    </Col>
  </Row>

)

export default Reward;