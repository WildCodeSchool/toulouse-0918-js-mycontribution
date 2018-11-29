import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/Accueil.scss';
import { BigTitle, StyledContainer, Text, Subtitle, Line, Title } from '../data/styledComponents';
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
              : <StyledContainer className="bienvenue" orange>
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
                  <Subtitle className="presentation mb-4">Qu’est-ce que My Contribution ?</Subtitle>
                  <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duisautem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et ac-cumsan et iusto odio dignissim qui blandit.</Text>
                  <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis</Text>
                </Col>
              </Row>
            </Container>
          </StyledContainer>
        }

        <StyledContainer className="my-5">
          <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col sm="12" className="actualite rounded py-4 px-4">
                <div className="events">
                  <div> 
                    <Subtitle><span className="fas fa-calendar-alt mr-2" />Les évènements à venir</Subtitle>
                    <Line />
                  </div>
                  
                </div>
                <div className="missions mt-5">
                  <div>
                    <Subtitle><span className="fas fa-rocket mr-2" /> Dernières missions</Subtitle>
                    <Line />
                  </div>
                </div>
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