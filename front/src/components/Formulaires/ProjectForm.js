import React, { Fragment } from 'react';
import { Container, Row, Col, Form } from 'reactstrap';
import { StyledContainer, HeaderForm, Subtitle, Icon, StyledButton, FormContainer, TextHeavy, Text } from '../../data/styledComponents';

import AboutProject from './AboutProject';
import Skills from './Skills';
import Contact from './Contact';
import Team from './Team';
import Reward from './Reward';
import Sponsors from './Sponsors';
import Events from './Events';

const ProjectForm = ({ projectType, submitForm, onChange, onChangeEvent, project, addEvent, onChangeFile }) => (
  <Fragment>
    <HeaderForm>
      <Container>
        <Row>
          <Col lg="1">
            <Icon>
              {
                projectType === 'initiative'
                ? <i className="fas fa-lightbulb mr-2"></i>
                : <i className="fas fa-rocket mr-2"></i>
              }
            </Icon>
          </Col>
          <Col lg="11" className="text-center my-auto">
            <Subtitle className="m-0">Créer une {projectType}</Subtitle>
          </Col>
        </Row>
      </Container>
    </HeaderForm>
    <StyledContainer>
      <FormContainer>
        <Container>
          <Form onSubmit={submitForm} method="POST" encType="multipart/form-data" action="/:type">
            <AboutProject projectType={projectType} onChange={onChange} onChangeFile={onChangeFile} />
            <Skills projectType={projectType} onChange={onChange} />
            <Contact projectType={projectType} onChange={onChange} />
            <Team projectType={projectType} onChange={onChange} />
            <Reward projectType={projectType} onChange={onChange} />
            <Sponsors projectType={projectType} onChange={onChange} />
            {
              projectType === 'initiative'
              && <Events 
                  projectType={projectType} 
                  onChangeEvent={onChangeEvent} 
                  addEvent={addEvent}
                  events={project.events}  
                />
            }
            <div className="d-flex justify-content-center mt-5">

            <StyledButton type="submit" className="submit-btn mr-4">
              <TextHeavy>
                {
                  projectType === 'initiative'
                  ? <i className="fas fa-lightbulb mr-2"></i>
                  : <i className="fas fa-rocket mr-2"></i>
                }
                {
                  projectType === 'initiative'
                  ? 'Créer mon initiative'
                  : 'Créer ma mission'
                }
              </TextHeavy>
            </StyledButton>

            <StyledButton className="reset-btn ml-4" black>
              <TextHeavy white>
                Annuler
              </TextHeavy>
            </StyledButton>
            
          </div>
          </Form> 
          <Text className="mt-5">*champs requis</Text>
        </Container>
      </FormContainer>
    </StyledContainer>
  </Fragment>
)

export default ProjectForm;