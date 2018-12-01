import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import avatar from './test.jpg';
import { axios } from 'axios';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      project:[]
    }
  }

handleClick () {
  const { name } = this.state;
  axios.get('/api/project', this.state)
  .then(result => console.log(result))
}

  render() {
    return (
      <div className="bg-secondary container-fluid pt-5 pb-5">
        <Container className="bg-white container rounded p-5">
          <Row className="p-5">
            <Col lg="3">
              <img
                className="w-100 rounded-circle"
                src={avatar}
                alt={avatar}></img>
            </Col>
            <Col lg="9">
              <h2>John Doe</h2>
              <p className="m-1">john.doe@contiental.com</p>
              <p
                color="warning"
                className="text-warning m-1 font-weight-bold">
                Profil Connext
              </p>
            </Col>
          </Row>
          <Row className='p-5'>
            <i className="fas fa-id-card ml-2 mr-2"></i>
            <h5>Description</h5>
            <i className="fas fa-edit ml-2 mr-2"></i>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          </Row>
          <Row className='pr-5 pl-5 pt-1'>
            <i className="fas fa-star mr-2"></i>
            <h5>Centre d'intérêt et compétences</h5>
            <i className="fas fa-edit ml-2 mr-2"></i>
          </Row>
          <Row className='pr-5 pl-5 pt-1'>
            <p className='bg-warning p-3 ml-2 mr-2 rounded'>Aéronautique</p>
            <p className='bg-warning p-3 ml-2 mr-2 rounded'>Electronique</p>
            <p className='bg-warning p-3 ml-2 mr-2 rounded'>Anglais</p>
            <p className='bg-warning p-3 ml-2 mr-2 rounded'>IA</p>
            <p className='bg-warning p-3 ml-2 mr-2 rounded'>Sécurité</p>
          </Row>
        </Container>
        <Container className="bg-white container rounded p-5 mt-5">
          <Row className="text-center d-flex justify-content-around">
            <div>
              <i
                className="fas fa-heart"
                style={{ fontSize: '4em' }}>
              </i>
              <p>Mes favoris</p>
            </div>
            <div>
              <i
                className="fas fa-lightbulb"
                style={{ fontSize: '4em' }}>
              </i>
              <p>Mes initiatives</p>
            </div>
            <div>
              <p onClick={this.handleClick} ><i
                className="fas fa-rocket"
                style={{ fontSize: '4em' }}>
              </i>
              </p>
              <p>Mes missions</p>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Profil;