import React from 'react'
import { Subtitle, UserCard, Icon, Competence } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';

const ContributeurItem = ({ connext, email, firstname, lastname, picture, presentation, skill }) => (
    <UserCard className="mb-3">
      <Container>
        <Row>
          <Col lg="2" xs="12" className="d-flex align-items-center justify-content-center">
            <img src={picture} className="rounded img-fluid" alt={`${firstname}-${lastname}`}/>
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <Container>
              <Row>
                <Col>
                  <Subtitle>{lastname.charAt(0).toUpperCase() + lastname.slice(1)} 
                  &nbsp;{firstname.charAt(0).toUpperCase() + firstname.slice(1)}
                  </Subtitle>
                </Col>
              </Row>

              <Row>
                <Col>
                {
                  skill.split(',').map((competence, key) => {
                    return(
                      <Competence>{competence}</Competence>
                    )
                  })
                  
                }
                </Col>
              </Row>
            </Container>

          </Col>

          <Col lg="2" xs="12" className="icon d-flex align-items-center justify-content-end mr-3">
            <Icon>
              <i className="fas fa-envelope fa-fw"></i>
            </Icon>
          </Col>
        </Row>
      </Container>
    </UserCard>
  )

export default ContributeurItem;
