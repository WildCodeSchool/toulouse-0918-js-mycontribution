import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Text, Subtitle, Competence, TextBold } from '../../data/styledComponents';

const ProjectInfos = () => (
  <Fragment>
    <Row>
      <Col>
        <TextBold>
          <i className="fas fa-envelope fa-fw" ></i>
          Contact
        </TextBold>
        <Text>
          email goes here
        </Text>
      </Col>
    </Row>

    <Row>
      <Col>
        <TextBold>
          <i className="fas fa-users fa-fw" ></i>
          Equipe projet
        </TextBold>
        <Text>
          equipe goes here
        </Text>
      </Col>
    </Row>

    <Row>
      <Col>
        <TextBold>
          <i className="fas fa-cogs fa-fw" ></i>
          Compétences recherchées
        </TextBold>
        {/* {
          wantedSkills.map((skill, key) => {
            return(
              <Competence>{skill}</Competence>
            )
          })
        } */}
      </Col>
    </Row>
  </Fragment>

)

export default ProjectInfos;