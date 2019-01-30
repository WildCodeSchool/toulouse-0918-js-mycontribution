import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// ajout d'une route pour ouvrir la page profile de l'utilisateur
import { Link } from 'react-router-dom';
import { Subtitle, UserCard, Icon, Competence } from '../../data/styledComponents';


const ContributeurItem = ({
  id, connext, email, firstname, lastname, picture, presentation, skill
}) => (
  <UserCard className="mb-3">
    <Container>
      <Row>
        <Col lg="2" xs="12" className="d-flex align-items-center justify-content-center">
          <img src={picture} className="rounded img-fluid" alt={`${firstname}-${lastname}`} />
        </Col>

        <Col className="d-flex align-items-center justify-content-center">
          <Container>
            <Row>
              <Col>
                <Link to={`/users/${id}`}>
                  <Subtitle>{firstname}&nbsp;{lastname}
                  </Subtitle>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col>
                {
                  skill.split(',').map((competence, index) => {
                    return (
                      <Competence key={index}>{competence}</Competence>
                    )
                  })

                }
              </Col>
            </Row>
          </Container>

        </Col>

        <Col lg="2" xs="12" className="icon d-flex align-items-center justify-content-end mr-3">
          <Icon>
            <i className="fas fa-envelope fa-fw" />
          </Icon>
        </Col>
      </Row>
    </Container>
  </UserCard>
);

export default ContributeurItem;
