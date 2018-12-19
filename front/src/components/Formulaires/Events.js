import React, { Fragment } from 'react';
import {  Row, Col, FormGroup, Input } from 'reactstrap';
import { Text, Icon, TextBold, Line, TextHeavy } from '../../data/styledComponents';

const Events = ({ projectType, submitForm, onChange }) => (
  <Row className="mt-5">
    <Col>
      <TextBold className="m-0">
        <i className="fas fa-calendar-alt mr-2"></i>
        Evenements (optionnel)
    </TextBold>
      <Line></Line>
      <FormGroup className="mt-3 d-flex justify-content-between">
        <TextHeavy>Date</TextHeavy>
        <Input
          type="date"
          name="eventDate"
          placeholder="JJ/MM/AAAA"
          className="mr-3"
          style={{ maxWidth: '30%' }}
          onChange={onChange}
        />
        <TextHeavy>Heure</TextHeavy>
        <Input
          type="time"
          name="eventHour"
          placeholder="JJ/MM/AAAA"
          className="ml-3"
          style={{ maxWidth: '30%' }}
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup className="mt-3">
        <TextHeavy>
          Lieu (optionnel)
        <Input 
          type="text" 
          name="eventPlace" 
          onChange={onChange}
        />
        </TextHeavy>
      </FormGroup>
      <FormGroup className="mt-3">
        <TextHeavy>
          Nom de l'évènement
        <Input 
          type="text" 
          name="eventName" 
          onChange={onChange} 
        />
        </TextHeavy>
      </FormGroup>
      <FormGroup className="mt-3">
        <TextHeavy>
          Description de l'évènement
        <Input 
          type="textarea" 
          rows="6" 
          name="eventDesc" 
          onChange={onChange} 
        />
        </TextHeavy>
      </FormGroup>
      <div className="d-flex ">
        <Icon><i className="fas fa-plus-circle mr-2"></i></Icon>
        <Text className="align-self-center">Ajouter un évènement</Text>
      </div>
    </Col>
  </Row>
)

export default Events;