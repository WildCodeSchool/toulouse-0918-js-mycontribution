
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import './index.css';

const ButtonsProfil = () => (
  <Container>
    <Row className="text-center d-flex justify-content-around mb-5">
      <div>
        <NavLink className="active" activeStyle={{ color: '#F5A214' }} to="/profil/9/favorite">
          <i className="fas fa-heart" style={{ color: 'inherit', fontSize: '8vh' }} />
        </NavLink>
      </div>
      <div>
        <NavLink className="active" activeStyle={{ color: '#F5A214' }} to="/profil/9/initiative">
          <i className="fas fa-lightbulb" style={{ fontSize: '8vh' }} />
        </NavLink>
      </div>
      <div className="text-center">
        <NavLink className="active" activeStyle={{ color: '#F5A214' }} to="/profil/9/mission">
          <i className="fas fa-rocket" style={{ fontSize: '8vh' }} />
        </NavLink>
      </div>
    </Row>
  </Container>
);
export default ButtonsProfil;

