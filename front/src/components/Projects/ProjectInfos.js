import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Text, TextBold, Competence } from '../../data/styledComponents';

const ProjectInfos = ({ contact, team, skills, }) => (
  <Container id="project-infos">
    <Row>
      <Col>
        <TextBold>
          <i className="fas fa-envelope fa-fw mr-2" ></i>
          Contact
        </TextBold>
        <Text>
          {
            contact ? contact : "Email non renseigné"
          }
        </Text>
      </Col>
      <Col>
        <TextBold>
          <i className="fas fa-users fa-fw mr-2" ></i>
          Equipe projet
        </TextBold>
        <Text >
          {
            team ? team : "Equipe non renseigné"
          }
        </Text>
      </Col>
    </Row>

    <Row className="mt-4">
      
    </Row>

    <Row className="mt-4">
      <Col>
        <TextBold>
          <i className="fas fa-cogs fa-fw mr-2" ></i>
          Compétences recherchées
        </TextBold>
        {
          skills !== ''
          ? skills && skills.split(',').map((skill, key) => {
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