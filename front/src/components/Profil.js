import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"
import axios from "axios";
import "../css/Accueil.scss";
/* import ProfilListContainer from "../containers/ProjectListContainer";
 */
class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      projects: []
    }
  }

  componentDidMount() {
    axios.get("/api/profil")
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }))

  }

  render() {
    const { user } = this.state;
    console.log(user)
    return (
      <div className="app">
        {
          user.id === 6
            ? (
              <div className="mt-5 mb-5">
                <Container style={{ paddingRight: "15%", paddingLeft: "15%" }}
                  className="presentation rounded">
                  <Row className="">
                    <Col lg="4" className="mt-5">
                      <img
                        className="w-100 rounded-circle"
                        src={user.picture}
                        alt={user.picture}></img>
                    </Col>
                    <Col lg="8" className="mt-5">
                      <h2 className="font-weight-bold">
                        {user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}
                        &nbsp;{user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}
                      </h2>
                      <p className="m-1">{user.email}</p>
                      <p
                        color="warning"
                        className="text-warning m-1 font-weight-bold">
                        {user.connext}
                      </p>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <i className="fas fa-id-card ml-2 mr-2"></i>
                    <h5 className="font-weight-bold">Description</h5>
                    <i className="fas fa-edit ml-2 mr-2"></i>
                    <p className="text-justify">{user.presentation}</p>
                  </Row>
                  <Row className="mt-2">
                    <i className="fas fa-star mr-2"></i>
                    <h5 className="font-weight-bold">Centre d"intérêt et compétences</h5>
                    <i className="fas fa-edit ml-2 mr-2"></i>
                  </Row>
                  <Row className="mt-2 pb-5">
                    {
                      user.skill.split(',').map(skill =>
                        <p className="bg-warning p-2 ml-1 mr-1 rounded">
                          {skill}
                        </p>
                      )}
                  </Row>
                </Container>
                <Container className="bg-white container rounded p-5 mt-5">
                  <Row className="text-center d-flex justify-content-around mb-5">
                    <div>
                      <Link
                        activeClassName="active"
                        to="/profil/favoris">
                        <i
                          className="fas fa-heart"
                          style={{ color: "black", fontSize: "4em" }}>
                        </i>
                        Mes Favoris
                      </Link>
                    </div>
                    <div>
                      <Link
                        activeClassName="active"
                        to="/profil/initiative">
                        <i
                          className="fas fa-lightbulb"
                          style={{ color: "black", fontSize: "4em" }}>
                        </i>
                        Mes initiatives
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link
                        activeClassName="active"
                        to="/profil/mission" >
                        <i
                          className="fas fa-rocket"
                          style={{ color: "black", fontSize: "4em" }}>
                        </i>
                        Mes Missions
                    </Link>
                    </div>
                  </Row>
{/*                  <ProfilListContainer />
 */}               </Container>
              </div>
            )
            :
            <div className="p-5 text-center">
              <Container className="bg-warning p-5 rounded">
                <h1>ERROR 404</h1>
                <p>{user.lastname}, hello !</p>
                <p>veuillez vous connecter pour accéder à cette page</p>
                <p>Retournez à la page de connexion => <a href="#">cliquez ici</a></p>
              </Container>
            </div>
        }
      </div>
    )
  }
}
export default Profil;