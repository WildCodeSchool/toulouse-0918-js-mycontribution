import React, { Fragment } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { StyledContainer, HeaderForm, Subtitle, Icon, StyledButton, FormContainer, TextHeavy } from '../../data/styledComponents';

import AboutProject from './AboutProject';
import Skills from './Skills';
import Contact from './Contact';
import Team from './Team';
import Reward from './Reward';
import Sponsors from './Sponsors';
import Events from './Events';

const ProjectForm = ({ projectType }) => (
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
          <Form>
            <AboutProject projectType={projectType} />
            <Skills projectType={projectType} />
            <Contact projectType={projectType} />
            <Team projectType={projectType} />
            <Reward projectType={projectType} />
            <Sponsors projectType={projectType} />
            {
              projectType === 'initiative'
              && <Events projectType={projectType} />
            }
          </Form>

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
        </Container>
      </FormContainer>
    </StyledContainer>
  </Fragment>
)

export default ProjectForm;