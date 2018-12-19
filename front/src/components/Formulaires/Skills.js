import React from 'react';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import { Icon, TextBold, Line, TextHeavy } from '../../data/styledComponents';

const Skills = ({ projectType, submitForm, onChange }) => (
  <Row className="mt-5">
    <Col>
      <TextBold className="m-0">
        <i className="fas fa-cogs mr-2"></i>
        Compétences recherchées
        </TextBold>
      <Line></Line>
      <FormGroup className="mt-3">
        <TextHeavy className="d-flex">
          <Input 
            type="text" 
            name="skills" 
            style={{ maxWidth: '40%' }} 
            onChange={onChange}
          />
          <Icon className="ml-3">
            <i className="fas fa-plus-circle mr-2 "></i>
          </Icon>
        </TextHeavy>
      </FormGroup>
    </Col>
  </Row>
)

export default Skills;