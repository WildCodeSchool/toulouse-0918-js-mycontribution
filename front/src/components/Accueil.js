import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import '../css/Accueil.scss';
import { BigTitle, StyledContainer } from '../data/styledComponents';

import AccueilNews from './Accueil/AccueilNews';
import AccueilRecherche from './Accueil/AccueilRecherche';
import AccueilPropose from './Accueil/AccueilPropose';
import AccueilPresentation from './Accueil/AccueilPresentation';

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connexion: false,
      profil: 'Eva',
      events: []
    }
  }

  componentDidMount() {
    axios.get('/api/evenements')
      .then(res => res.data)
      .then(events => this.setState({ events }))
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <Container fluid style={{marginTop: "150px"}}>
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
          <AccueilPresentation />
        }

        <AccueilNews />
        <AccueilRecherche />
        <AccueilPropose />
      </Container>
    )
  }
}

export default Accueil