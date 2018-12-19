import React, { Fragment } from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { TextBold, Line, TextHeavy } from '../../data/styledComponents';

const AboutProject = ({ projectType, submitForm, onChange }) => (
    <Row>
      <Col>
        <TextBold className="m-0">
          <i className="fas fa-id-card mr-2"></i>
          {
            projectType === 'initiative'
            ? 'A propos de l\'initiative'
            : 'A propos de la mission'
          }
        </TextBold>
        <Line></Line>
        <FormGroup className="mt-3">
          <TextHeavy>
            <Label for="logo">Logo (optionnel)</Label>
            <Input 
              type="file" 
              name="logo" 
              id="logo" 
              onChange={onChange}
            />
          </TextHeavy>
        </FormGroup>
        <FormGroup>
          <TextHeavy>
            <Label for="title">Nom</Label>
            <Input 
              type="text" 
              name="name" 
              placeholder="Nom du projet"
              onChange={onChange}
            />
          </TextHeavy>
        </FormGroup>
        <FormGroup>
          <TextHeavy>
            <Label for="title">Résumé de
              {
                projectType === 'initiative'
                ? ' l\'initiative'
                : ' la mission'
              }
            </Label>
            <Input 
              type="textarea" 
              name="summary" 
              maxlength="150" 
              placeholder="Indiquez un court résumé"
              onChange={onChange}
            />
          </TextHeavy>
        </FormGroup>
        <FormGroup>
          <TextHeavy>
            <Label for="title">Description</Label>
            <Input 
              type="textarea" 
              name="description" 
              rows="8" 
              placeholder={`Donnez-nous plus de détails sur cette ${projectType}`} 
              onChange={onChange}
            />
          </TextHeavy>
        </FormGroup>
      </Col>
    </Row>
)

export default AboutProject;