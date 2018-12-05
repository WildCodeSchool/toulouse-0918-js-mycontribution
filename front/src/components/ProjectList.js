import React, { Component } from 'react';
import { StyledContainer } from '../data/styledComponents'
import { Container, Row, Col } from 'reactstrap';

import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => (
    <StyledContainer className="projectList" style={{marginTop: "10%"}}>
      <Container>
        <Row>
          <Col>
          {
            projects.map((project,index) =>
              <ProjectItem
                key={index}
                {...project}
              />
            )      
          }
          </Col>
        </Row>
      </Container>
     
    </StyledContainer>
  )

export default ProjectList;