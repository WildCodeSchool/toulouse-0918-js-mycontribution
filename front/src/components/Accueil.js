import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/Accueil.scss'

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
        <Container fluid>
          <Row className="d-flex justify-content-center my-5">
            <Col xs="9" sm="6" md="4" className="bienvenue rounded py-3">{this.state.connexion ? `Bonjour ${this.state.profil} !` : <div>Bienvenue sur<br />My Contribution</div>}</Col>
          </Row>
        </Container>
        {this.state.connexion ? '' :
          <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col xs="11" sm="10" md="9" className="presentation rounded py-4 px-4">
                <h5>Qu’est-ce que My Contribution ?</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duisautem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et ac-cumsan et iusto odio dignissim qui blandit.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis</p>
              </Col>
            </Row>
          </Container>}
        <Container fluid>
          <Row className="d-flex justify-content-center my-5">
            <Col xs="11" sm="10" md="9" className="actualite rounded py-4 px-4">
              <div>
                <h5 className="fas fa-lightbulb"> Prochains évènements</h5>
                <hr />
              </div>
              <div>
                <h5 style={{ fontWeight: 'bold' }} className="fas fa-rocket"> Dernières missions</h5>
                <hr />
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="d-flex justify-content-center my-5">
            <Col xs="11" sm="10" md="9" className="chercher rounded py-4 px-4 text-center">
              <h3>Vous cherchez :</h3>
              <Row className="d-flex justify-content-between my-4">
                <Col xs="4"><i className="fas fa-lightbulb fa-3x"></i><p>Une initiative ?</p></Col>
                <Col xs="4"><i className="fas fa-rocket fa-3x"></i><p>Une mission ?</p></Col>
                <Col xs="4"><i className="fas fa-users fa-3x"></i><p>Des contributeurs ?</p></Col>
              </Row>
              <p>Cliquez sur les icones <i className="fas fa-lightbulb"></i> <i className="fas fa-rocket"></i> <i className="fas fa-users"></i> dans la barre de navigation pour accéder aux différentes listes</p>
            </Col>
          </Row>
        </Container>
        {this.state.connexion ? '' :
          <Container fluid>
            <Row className="d-flex justify-content-center my-5">
              <Col xs="11" sm="10" md="9" className="proposer rounded py-4 px-4 text-center">
                <h3>Vous voulez proposer : </h3>
                <Row className="d-flex justify-content-between my-4">
                  <Col xs="6"><i className="fas fa-lightbulb fa-3x"></i><p>Une initiative ?</p></Col>
                  <Col xs="6"><i className="fas fa-rocket fa-3x"></i><p>Une mission ?</p></Col>
                </Row>
                <p>Connectez-vous et cliquez sur le bouton <i className="fas fa-plus"></i> dans la barre de navigation !</p>
              </Col>
            </Row>
          </Container>}
      </div>
    )
  }
}

export default Accueil