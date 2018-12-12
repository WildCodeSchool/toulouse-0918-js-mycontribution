import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Text, TextBold, Competence } from '../../data/styledComponents';

const ProjectInfos = ({ contact, team, wantedSkill, }) => (
  <Container id="project-infos">
    <Row>
      <Col>
        <TextBold>
          <i className="fas fa-envelope fa-fw" ></i>
          Contact
        </TextBold>
        <Text>
          {
            contact ? contact : "Email non renseigné"
          }
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
          {
            contact ? contact : "Equipe non renseigné"
          }
        </Text>
      </Col>
    </Row>

    <Row>
      <Col>
        <TextBold>
          <i className="fas fa-cogs fa-fw" ></i>
          Compétences recherchées
        </TextBold>
        {
          wantedSkill !== ''
          ? wantedSkill && wantedSkill.split(',').map((skill, key) => {
              return (
                  <Competence key={key}>{skill}</Competence>
              )
              
          })
          : <Text>Compétences non renseignées</Text>
        }
      </Col>
    </Row>
  </Container>

)

export default ProjectInfos;