import React, { Fragment } from 'react';
import {  Row, Col, FormGroup, Input, Collapse } from 'reactstrap';
import { Text, Icon, TextBold, Line, TextHeavy } from '../../data/styledComponents';

// Renvoie true si au moins des champs est non-vide
const isEventEmpty = event => !event.eventDate && !event.eventHour
          && !event.eventPlace && !event.eventName && !event.eventDesc;

const isEventFilled = event => event.eventDate && event.eventHour
&& event.eventPlace && event.eventName && event.eventDesc;

// Vérifie que l'event est valide : tous champs remplis
const isEventValid = event => isEventEmpty(event) || isEventFilled(event);

const Events = ({ onChangeEvent, events, addEvent }) => {
  const areAllValid = events.every(isEventFilled);
  return (
    <Row className="mt-5">
      <Col>
        <TextBold className="m-0">
          <i className="fas fa-calendar-alt mr-2"></i>
          Evenements (optionnel)
        </TextBold>
        <Line></Line>
        {
          events.map((event, index) => {
            const isValid = isEventValid(event);
            return (
              <Fragment key={index} >
                  <Collapse className="event-required-fields font-italic" isOpen={!isValid}>
                    Si un champ de l'évènement est rempli, tous les autres deviennent obligatoires.
                  </Collapse>
                <FormGroup className="event-section mt-4 d-flex justify-content-between">
                  <TextHeavy>Date</TextHeavy>
                  <Input
                    type="date"
                    name="eventDate"
                    placeholder="JJ/MM/AAAA"
                    className="mr-3"
                    style={{ maxWidth: '30%' }}
                    onChange={onChangeEvent(index)}
                    value={event.eventDate}
                    required={!isValid}
                  />
                  <TextHeavy>Heure</TextHeavy>
                  <Input
                    type="time"
                    name="eventHour"
                    placeholder="hh:mm"
                    className="ml-3"
                    style={{ maxWidth: '30%' }}
                    onChange={onChangeEvent(index)}
                    value={event.eventHour}
                    required={!isValid}
                  />
                </FormGroup>
                <FormGroup className="mt-4">
                  <TextHeavy>
                    Lieu (optionnel)
                  <Input 
                    type="text" 
                    name="eventPlace" 
                    onChange={onChangeEvent(index)}
                    value={event.eventPlace}
                    required={!isValid}
                  />
                  </TextHeavy>
                </FormGroup>
                <FormGroup className="mt-4">
                  <TextHeavy>
                    Nom de l'évènement
                  <Input 
                    type="text" 
                    name="eventName" 
                    onChange={onChangeEvent(index)}
                    value={event.eventName}
                    required={!isValid}
                  />
                  </TextHeavy>
                </FormGroup>
                <FormGroup className="mt-4">
                  <TextHeavy>
                    Description de l'évènement
                  <Input 
                    type="textarea" 
                    rows="6" 
                    name="eventDesc" 
                    onChange={onChangeEvent(index)}
                    value={event.eventDesc}
                    required={!isValid}
                  />
                  </TextHeavy>
                </FormGroup>
                <Line style={{maxWidth: '50%'}} className="mx-auto mb-5 mt-5" />
              </Fragment>
            )
          })
        }
        <Collapse className="event-required-fields font-italic" isOpen={!areAllValid}>
          Terminez la saisie des évènements déjà créés, pour pouvoir en ajouter d'autres.
        </Collapse>
        <div
          className="d-flex"
          onClick={() => {
            if(areAllValid) addEvent();
          }}
          style={{cursor: 'pointer'}}>
          <Icon style={{color: areAllValid ? 'black' : '#aaa'}}>
            <i className="fas fa-plus-circle mr-2"></i>
          </Icon>
          <Text
            style={{color: areAllValid ? 'black' : '#aaa'}}
            className="align-self-center"
          >
            Ajouter un évènement
          </Text>
        </div>
      </Col>
    </Row>
  );
};

export default (Events);