import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RouterNavLink } from 'react-router-dom';
import '../css/Navigation.scss';
import ConnexionInscription from './connexion-inscription/ConnexionInscription';
import { authSignIn } from '../actions'
import { connect } from 'react-redux';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar style={{ padding: '0' }}
          className="navigation"
          light expand="md">
          <NavbarBrand tag={RouterNavLink} activeClassName="active" to="/" className="text-white ml-4">
            MyContribution
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="p-2 ml-2">
                <NavLink tag={RouterNavLink} activeClassName="active" to="/liste-initiatives"
                  className="text-white">
                  <i style={{ fontSize: '2.5em' }}
                    className="fas fa-lightbulb">
                  </i>
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ml-2 mr-2">
                <NavLink tag={RouterNavLink} activeClassName="active" to="/liste-missions"
                  className="text-white">
                  <i style={{ fontSize: '2.5em' }}
                    className="fas fa-rocket">
                  </i>
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ml-2 mr-2">
                <NavLink
                  className="text-white"
                  href="#">
                  <i
                    className="fas fa-users"
                    style={{ fontSize: '2.5em' }}>
                  </i>
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ml-2 mr-2">
                <NavLink tag={RouterNavLink} activeClassName="active" to="/ecosysteme"
                  className="text-white"
                >
                  <i
                    className="fas fa-globe-americas"
                    style={{ fontSize: '2.5em' }}>
                  </i>
                </NavLink>
              </NavItem>
              <NavItem
                className="ml-4 mr-4 font-weight-bold"
                style={{ color: 'white', cursor: 'pointer' }}
                onClick={this.props.authSignIn}
                nav>
                Connexion
                  <i
                  className="fas fa-sign-in-alt mr-1 ml-1"
                  style={{ fontSize: '2em' }}>
                </i>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <ConnexionInscription />
      </div>
    );
  }
}

const mapDispatchToProps = {
  authSignIn
};

export default connect(
  null,
  mapDispatchToProps
)(Navigation);