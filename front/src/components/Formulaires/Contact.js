import React, { Fragment } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { TextBold, Line, TextHeavy } from '../../data/styledComponents';

const Contact = ({ projectType, submitForm, onChange }) => (
  <Row className="mt-5">
    <Col>
      <TextBold className="m-0">
        <i className="fas fa-envelope mr-2"></i>
        Contact
        </TextBold>
      <Line></Line>
      <FormGroup className="mt-3">
        <TextHeavy>
          <Input 
            type="text" 
            name="contact" 
            placeholder="Email de la personne à contacter"
            onChange={onChange}
          />
        </TextHeavy>
      </FormGroup>
    </Col>
  </Row>
)

export default Contact;