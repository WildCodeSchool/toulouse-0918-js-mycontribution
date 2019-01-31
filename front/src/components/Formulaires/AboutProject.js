import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { TextBold, Line, TextHeavy } from '../../data/styledComponents';

const AboutProject = ({ project, projectType, onChange, onChangeFile }) => (
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
        <FormGroup className="mt-4">
          <TextHeavy>
            <Label for="logo">Logo (optionnel)</Label>
            <Input 
              type="file" 
              name="logo" 
              id="logo" 
              onChange={onChangeFile}
            />
          </TextHeavy>
        </FormGroup>
        <FormGroup className="mt-4">
          <TextHeavy>
            <Label for="title">Nom*</Label>
            <Input 
              type="text" 
              name="name"
              value={project.name}
              placeholder="Nom du projet"
              onChange={onChange}
              required
            />
          </TextHeavy>
        </FormGroup>
        <FormGroup className="mt-4">
          <TextHeavy>
            <Label for="title">Résumé de
              {
                projectType === 'initiative'
                ? ' l\'initiative*'
                : ' la mission*'
              }
            </Label>
            <Input 
              type="textarea" 
              name="summary"
              value={project.summary}
              maxLength="150" 
              placeholder="Indiquez un court résumé"
              onChange={onChange}
              required
            />
          </TextHeavy>
        </FormGroup>
        <FormGroup className="mt-4">
          <TextHeavy>
            <Label for="title">Description*</Label>
            <Input 
              type="textarea" 
              name="description"
              value={project.description}
              rows="8" 
              placeholder={`Donnez-nous plus de détails sur cette ${projectType}`} 
              onChange={onChange}
              required
            />
          </TextHeavy>
        </FormGroup>
        <FormGroup className="mt-4">
          <TextHeavy>
            <Label for="startDate">Date de début*</Label>
            <Input 
              type="date"
              name="startDate"
              value={project.startDate.substr(0, 10)}
              onChange={onChange}
              required
            />
          </TextHeavy>
        </FormGroup>
        <FormGroup className="mt-4">
          <TextHeavy>
            <Label for="startDate">Date de fin*</Label>
            <Input 
              type="date"
              name="endDate"
              value={project.endDate.substr(0, 10)}
              onChange={onChange}
              required
            />
          </TextHeavy>
        </FormGroup>
      </Col>
    </Row>
)

export default AboutProject;