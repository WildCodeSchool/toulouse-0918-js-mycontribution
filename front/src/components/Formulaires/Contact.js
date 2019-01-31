import React from 'react';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import { TextBold, Line, TextHeavy } from '../../data/styledComponents';

const Contact = ({ project, projectType, submitForm, onChange }) => (
  <Row className="mt-5">
    <Col>
      <TextBold className="m-0">
        <i className="fas fa-envelope mr-2"></i>
        Contact*
        </TextBold>
      <Line></Line>
      <FormGroup className="mt-4">
        <TextHeavy>
          <Input 
            type="text" 
            name="contact"
            value={project.contact}
            placeholder="Email de la personne à contacter"
            onChange={onChange}
            required
          />
        </TextHeavy>
      </FormGroup>
    </Col>
  </Row>
)

export default Contact;