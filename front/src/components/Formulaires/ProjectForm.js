import React, { Fragment } from 'react';
import { Container, Row, Col, Form } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { StyledContainer, HeaderForm, Subtitle, Icon, StyledButton, ButtonForm, FormContainer, TextHeavy, Text } from '../../data/styledComponents';
import AboutProject from './AboutProject';
import Skills from './Skills';
import Contact from './Contact';
import Team from './Team';
import Reward from './Reward';
import Sponsors from './Sponsors';
import Events from './Events';

const ProjectForm = ({ projectType, submitForm, onChange, onChangeEvent, project, addEvent, onChangeFile, history, actionVerb }) => (
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
            <Subtitle className="m-0">{project.id ? 'Modifier' : 'Créer'} une {projectType}</Subtitle>
          </Col>
        </Row>
      </Container>
    </HeaderForm>
    <StyledContainer>
      <FormContainer>
        <Container>
          <Form onSubmit={submitForm} method="POST" encType="multipart/form-data" action="/:type">
            <AboutProject
              project={project}
              projectType={projectType}
              onChange={onChange}
              onChangeFile={onChangeFile}
            />
            <Skills
              project={project}
              projectType={projectType}
              onChange={onChange}
            />
            <Contact
              project={project}
              projectType={projectType}
              onChange={onChange}
            />
            <Team
              project={project}
              projectType={projectType}
              onChange={onChange}
            />
            <Reward
              project={project}
              projectType={projectType}
              onChange={onChange}
            />
            <Sponsors
              project={project}
              projectType={projectType}
              onChange={onChange}
            />
            {
              projectType === 'initiative'
              && <Events
                  project={project}
                  projectType={projectType} 
                  onChangeEvent={onChangeEvent} 
                  addEvent={addEvent}
                  events={project.events}  
                />
            }
            <div className="d-flex justify-content-center mt-5">

            <ButtonForm type="submit" className="submit-btn mr-4">
              
                {
                  projectType === 'initiative'
                  ? <i className="fas fa-lightbulb mr-2"></i>
                  : <i className="fas fa-rocket mr-2"></i>
                }
                {
                  projectType === 'initiative'
                  ? `${actionVerb} mon initiative`
                  : `${actionVerb} ma mission`
                }
              
            </ButtonForm>

            <ButtonForm className="reset-btn ml-4" black onClick={() => history.goBack()}>
                Annuler
            </ButtonForm>
            
          </div>
          </Form> 
          <Text className="mt-5">*champs requis</Text>
        </Container>
      </FormContainer>
    </StyledContainer>
  </Fragment>
)

export default withRouter(ProjectForm);