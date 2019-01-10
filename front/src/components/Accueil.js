import React, { Component } from 'react';
import '../css/Accueil.scss';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { BigTitle, StyledContainer } from '../data/styledComponents';
import AccueilNews from './Accueil/AccueilNews';
import AccueilRecherche from './Accueil/AccueilRecherche';
import AccueilPropose from './Accueil/AccueilPropose';
import AccueilPresentation from './Accueil/AccueilPresentation';

class Accueil extends Component {
  render() {
    const { user } = this.props;
    return (
      <Container fluid id="accueil">
        <Container>
          <Row className="d-flex justify-content-center my-5">
            <Col
              xs="12"
              className="text-center bienvenue"
            >
              {user
                ? `Bonjour ${user.firstname} !`
                : (
                  <StyledContainer id="welcome" orange>
                    <BigTitle>Bienvenue sur </BigTitle>
                    <BigTitle>My Contribution</BigTitle>
                  </StyledContainer>
                )
              }
            </Col>
          </Row>
        </Container>

        {user
          ? ''
          : <AccueilPresentation />
        }

        <AccueilNews />
        <AccueilRecherche />
        <AccueilPropose />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     eventsFetchRequest : () => dispatch(eventsFetchRequest()),
//     eventsFetchSuccess: (events) => dispatch(eventFetchSuccess(events))
//   }
// }

// const mapStateToProps = state => ({
//   events: state.events.events,
//   loading: state.events.loading,
//   error: state.events.error
// });

// const mapDispatchToProps = {
//   eventsFetchRequest, eventsFetchSuccess, eventsFetchError
// };

export default connect(mapStateToProps)(Accueil);
