import React, { Fragment } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { StyledContainer, StyledInput, HeaderForm, Text, Subtitle, Icon, TextBold, Line, StyledButton, FormContainer, TextHeavy } from '../../data/styledComponents';

const ProjectForm = () => (
  <Fragment >
    <HeaderForm>
      <Container>
        <Row>
          <Col lg="1">
            <Icon>
              <i className="fa fa-lightbulb fa-x3"></i>
            </Icon>
          </Col>
          <Col lg="11" className="text-center my-auto">
            <Subtitle className="m-0">Créer une initative</Subtitle>
          </Col>
        </Row>
      </Container>
    </HeaderForm>
    <StyledContainer>
      <FormContainer>
        <Container>
          <Form>
            <Row>
              <Col>
                <TextBold className="m-0">
                  <i className="fas fa-id-card mr-2"></i>
                  A propos de l'initiative
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
                    <Label for="title">Résumé de l'initative</Label>
                    <Input type="textarea" name="title" maxlength="150" placeholder="Indiquez une courte description" />
                  </TextHeavy>
                </FormGroup>
                <FormGroup>
                  <TextHeavy>
                    <Label for="title">Description de l'initative</Label>
                    <Input type="textarea" name="title" rows="8" placeholder="Donnez-nous plus de détails sur ce projet" />
                  </TextHeavy>
                </FormGroup>

              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <TextBold className="m-0">
                  <i className="fas fa-cogs mr-2"></i>
                  Compétences recherchées
              </TextBold>
                <Line></Line>
                <FormGroup className="mt-3">
                  <TextHeavy className="d-flex">
                    <Input type="text" name="compétence" style={{ maxWidth: '40%' }} />
                    <Icon className="ml-3">
                      <i className="fas fa-plus-circle mr-2 "></i>
                    </Icon>
                  </TextHeavy>
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <TextBold className="m-0">
                  <i className="fas fa-envelope mr-2"></i>
                  Contact
                </TextBold>
                <Line></Line>
                <FormGroup className="mt-3">
                  <TextHeavy>
                    <Input type="text" name="contact" placeholder="Email de la personne à contacter" />
                  </TextHeavy>
                </FormGroup>
              </Col>
            </Row>
            
            <Row className="mt-5">
              <Col>
                <TextBold className="m-0">
                  <i className="fas fa-users mr-2"></i>
                  Equipe projet (optionnel)
                </TextBold>
                <Line></Line>
                <FormGroup className="mt-3">
                  <TextHeavy>
                    <Input type="textarea" name="equipe" placeholder="Entrez les noms des personnes qui mènent le projet" />
                  </TextHeavy>
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <TextBold className="m-0">
                  <i className="fas fa-trophy mr-2"></i>
                  Récompenses (optionnel)
                </TextBold>
                <Line></Line>
                <FormGroup className="mt-3">
                  <TextHeavy>
                    <Input type="textarea" name="equipe" rows="6" placeholder="Quels sont les récompenses pour ce projet ?" />
                  </TextHeavy>
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <TextBold className="m-0">
                  <i className="fas fa-handshake mr-2"></i>
                  Sponsors (optionnel)
                </TextBold>
                <Line></Line>
                <FormGroup className="mt-3">
                  <TextHeavy>
                    <Input type="textarea" name="equipe" rows="6" placeholder="Quels sont les sponsors pour ce projet ?" />
                  </TextHeavy>
                </FormGroup>
              </Col>
            </Row>

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
                    name="date-event" 
                    placeholder="JJ/MM/AAAA"
                    className="mr-3" 
                    style={{maxWidth: '30%'}}
                  />
                  <TextHeavy>Heure</TextHeavy>
                  <Input 
                    type="time" 
                    name="date-event" 
                    placeholder="JJ/MM/AAAA" 
                    className="ml-3" 
                    style={{maxWidth: '30%'}}
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <TextHeavy>
                    Lieu (optionnel)
                    <Input type="text" name="place" />
                  </TextHeavy>
                </FormGroup>
                <FormGroup className="mt-3">
                  <TextHeavy>
                    Nom de l'évènement
                    <Input type="text" name="event-name" />
                  </TextHeavy>
                </FormGroup>
                <FormGroup className="mt-3">
                  <TextHeavy>
                    Description de l'évènement
                    <Input type="textarea" rows="6" name="envent-desc" />
                  </TextHeavy>
                </FormGroup>
                <div className="d-flex ">
                  <Icon><i className="fas fa-plus-circle mr-2"></i></Icon>
                  <Text className="align-self-center">Ajouter un évènement</Text>
                </div>
              </Col>
            </Row>
          </Form>
          <div className="d-flex justify-content-center mt-5">
            <StyledButton type="submit" className="submit-btn mr-4">
              <TextHeavy>
                <i className="fas fa-lightbulb mr-2"></i>
                Créer mon initative
              </TextHeavy>
            </StyledButton>
            <StyledButton className="reset-btn ml-4" black>
              <TextHeavy white>
                Annuler
              </TextHeavy>
            </StyledButton>
          </div>
        </Container>
      </FormContainer>
    </StyledContainer>
  </Fragment>


)

export default ProjectForm;