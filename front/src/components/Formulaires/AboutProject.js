import React, { Fragment } from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { TextBold, Line, TextHeavy } from '../../data/styledComponents';

const AboutProject = ({ projectType }) => (
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
            <Input type="file" name="file" id="logo" />
          </TextHeavy>
        </FormGroup>
        <FormGroup>
          <TextHeavy>
            <Label for="title">Nom</Label>
            <Input type="text" name="title" placeholder="Nom du projet" />
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
            <Input type="textarea" name="title" maxlength="150" placeholder="Indiquez un court résumé" />
          </TextHeavy>
        </FormGroup>
        <FormGroup>
          <TextHeavy>
            <Label for="title">Description</Label>
            <Input type="textarea" name="title" rows="8" placeholder={`Donnez-nous plus de détails sur cette ${projectType}`} />
          </TextHeavy>
        </FormGroup>
      </Col>
    </Row>
)

export default AboutProject;