import React, { Component } from 'react';
import '../css/Accueil.scss'
import axios from 'axios';
import { connect } from 'react-redux';
import { eventsFetchRequest, eventsFetchSuccess, eventsFetchError } from '../actions/actionsEvents'
import { Container, Row, Col } from 'reactstrap';
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
      profil: 'Eva'
    }
  }

  componentDidMount() {
    this.props.eventsFetchRequest()
    axios.get('/api/evenements')
      .then(res => res.data)
      .then(events => this.props.eventsFetchSuccess(events))
      .catch(error => this.props.eventsFetchError(error.response.data))
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     eventsFetchRequest : () => dispatch(eventsFetchRequest()),
//     eventsFetchSuccess: (events) => dispatch(eventFetchSuccess(events))
//   }
// }

const mapStateToProps = state => ({
  events: state.events.events,
  loading: state.events.loading,
  error: state.events.error
})

const mapDispatchToProps = {
  eventsFetchRequest, eventsFetchSuccess, eventsFetchError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Accueil)