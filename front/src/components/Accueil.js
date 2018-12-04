import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/Accueil.scss';
import { BigTitle, StyledContainer, Text, Subtitle, Line, Title, Competence, MissionCard, EventCard } from '../data/styledComponents';
import icons from '../data/icons';

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connexion: false,
      profil: 'Eva'
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="d-flex justify-content-center my-5">
            <Col  sm="12"
              className="bienvenue rounded py-3"
            >
            {
              this.state.connexion ? 
              `Bonjour ${this.state.profil} !` 
              : <StyledContainer id="welcome" orange>
                  <BigTitle>Bienvenue sur </BigTitle>
                  <BigTitle>My Contribution</BigTitle>
                </StyledContainer>
            }
            </Col>
          </Row>
        </Container>

        {
          this.state.connexion 
          ? '' 
          :
          <StyledContainer>
            <Container fluid>
              <Row className="d-flex justify-content-center">
                <Col xs="11" sm="10" md="12" className="rounded">
                  <Subtitle id="presentation mb-4">Qu’est-ce que My Contribution ?</Subtitle>
                  <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duisautem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et ac-cumsan et iusto odio dignissim qui blandit.</Text>
                  <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis</Text>
                </Col>
              </Row>
            </Container>
          </StyledContainer>
        }

        <StyledContainer className="my-5" id="news">
          <Container id="events">
            <Row className="d-flex justify-content-center">
              <Col sm="12" >
                <Subtitle><span className="fas fa-calendar-alt fa-fw mr-2" />Les évènements à venir</Subtitle>
                <Line />
              </Col>
            </Row>

            <Row>
              <Col>
                <EventCard className="mt-3">
                  <Container>
                    <Row>
                      <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
                        <img src="https://dummyimage.com/150x150/000/fff" className="rounded img-fluid" />
                      </Col>

                      <Col>
                        <Container fluid>
                          <Row className="mt-3">
                            <Subtitle>Mon super titre</Subtitle>
                          </Row>
                          <Row>
                            <Col className="p-0">
                              <Text style={{display: 'inline-flex'}} className="mr-3">
                                <i className="fas fa-calendar-alt fa-fw mr-2"></i>
                                JJ/MM/AAAA
                              </Text>
                              <Text style={{display: 'inline-flex'}}><i className="fas fa-clock fa-fw mr-2"></i>hh:mm</Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="p-0"> 
                              <Text><i className="fas fa-map-marker-alt fa-fw mr-2"/>Derrière le restaurant d'entreprise</Text>
                            </Col> 
                          </Row>
                          <Row>
                            <Text>Description<i className="fas fa-sort-down fa-fw ml-1"></i></Text>
                          </Row>
                        </Container>
                      </Col>

                      <Col xs="12" lg="2" className="d-flex align-items-center justify-content-end mr-3">
                        <i className="fas fa-lightbulb fa-3x"></i>
                      </Col>
                    </Row>
                  </Container>
                </EventCard>
              </Col>
            </Row>
          </Container>

          <Container id="missions" className="mt-5">
            <Row>
              <Col>
                <Subtitle><span className="fas fa-rocket fa-fw mr-2"/>Dernières missions</Subtitle>
                <Line/>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <MissionCard>
                  <Container>
                    <Row>
                      <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
                        <img src="https://dummyimage.com/150x150/000/fff" className="rounded img-fluid"/>
                      </Col>
                    
                      <Col className="mt-3">
                        <Container fluid>
                          <Row>
                            <Text white>
                              <i className="fas fa-calendar-alt fa-fw mr-3 icons"></i>
                              JJ/MM/AAAA
                            </Text>
                          </Row>
                          <Row>
                            <Col className="p-0">
                              <Subtitle white>Titre de la mission</Subtitle>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="p-0">
                              <Competence>Compétence 1</Competence>
                              <Competence>Compétence 2</Competence>
                              <Competence>Compétence 3</Competence>
                              <Competence>Compétence 4</Competence>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="p-0">
                              <Text className="mt-3" white>
                                Description <i className="fas fa-sort-down fa-fw ml-1"></i>
                              </Text>
                            </Col>
                          </Row>
                        </Container>
                      </Col>

                      <Col xs="12" lg="2" id="icon" className="d-flex align-items-center justify-content-end mr-3">
                        <i className="far fa-heart fa-3x fa-fw" ></i>
                      </Col>
                    </Row>
                  </Container>
                </MissionCard>
              </Col>
            </Row>
          </Container>
        </StyledContainer>


        <StyledContainer orange>
          <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col sm="12" className="chercher rounded text-center">
                <Title>Vous recherchez :</Title>
                <Row className="d-flex justify-content-between my-5">
                  {
                    icons.map((icon, key)=> {
                      const { fa, text } = icon
                      return (
                        <Col lg="3" md="6" xs="12">
                          <Text>
                            <i className={`fas ${fa} fa-3x mb-3`} key={key} />
                            <Text>{text}</Text>
                          </Text>
                        </Col>
                      )
                    })
                  }
                </Row>
                <Text>Cliquez sur les icones 
                  <i className="fas fa-calendar-alt mx-2"/>
                  <i className="fas fa-lightbulb mx-2"/>
                  <i className="fas fa-rocket mx-2" />
                  <i className="fas fa-users mx-2" />
                  dans la barre de navigation pour accéder aux différentes listes</Text>
              </Col>
            </Row>
          </Container>
        </StyledContainer>


        <StyledContainer className="my-5">
          <Container fluid>
            <Row className="d-flex justify-content-center ">
              <Col sm="12" className="proposer rounded text-center">
                <Title>Vous souhaitez proposer : </Title>
                  <Row className="d-flex justify-content-between my-5">
                    {
                        icons.map((icon, key)=> {
                          const { fa, text } = icon
                          return (
                            <Col lg="3" md="6" xs="12">
                              <Text>
                                <i className={`fas ${fa} fa-3x mb-3`} key={key} />
                                <Text>{text}</Text>
                              </Text>
                            </Col>
                          )
                        })
                      }
                  </Row>
                <Text>Connectez-vous et cliquez sur le bouton<i className="fas fa-plus mx-2"></i> dans la barre de navigation !</Text>
              </Col>
            </Row>
          </Container>
        </StyledContainer>
      </div>
    )
  }
}

export default Accueil