import React from 'react';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import { TextBold, Line, TextHeavy, Legende } from '../../data/styledComponents';

const Skills = ({ project, projectType, submitForm, onChange }) => (
  <Row className="mt-5">
    <Col>
      <TextBold className="m-0">
        <i className="fas fa-cogs mr-2"></i>
        Compétences recherchées*
        </TextBold>
      <Line></Line>
      <FormGroup className="mt-4">
        <TextHeavy className="d-flex mb-2">
          <Input 
            type="textarea" 
            name="skills"
            value={project.skills}
            rows="6" 
            onChange={onChange}
            required
          />
        </TextHeavy>
        <Legende>Veuillez renseigner les compétences que vous recherchez en les séparant par une virgule ET un espace.</Legende>
        <Legende>Exemple: "Autonomie, Mécanique, Informatique"</Legende>
      </FormGroup>
    </Col>
  </Row>
)

export default Skills;