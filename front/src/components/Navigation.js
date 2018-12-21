import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RouterNavLink } from 'react-router-dom';
import '../css/Navigation.scss';
import ConnexionInscription from './connexion-inscription/ConnexionInscription';
import { authSignIn } from '../actions';
import logo from '../img/logo.png';
import logoConti from '../img/logo-continental.png';
import { Icon, Text } from '../data/styledComponents';

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
        <Navbar className="navigation p-0 fixed-top " expand="lg">
          <div tag={RouterNavLink} to="/" className="ml-4 ">
            <img src={logoConti} alt={logoConti} className="p-2 logo-continental" />
          </div>

          <NavbarBrand tag={RouterNavLink} to="/" className="ml-4">
            <img src={logo} alt={logo} />
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="p-2 ml-2">
                <NavLink
                  tag={RouterNavLink}
                  className="active"
                  to="/evenements"
                >
                  <Icon white><i className="fas fa-calendar-alt" /></Icon>
                </NavLink>
              </NavItem>

              <NavItem className="p-2 ml-2">
                <NavLink
                  tag={RouterNavLink}
                  className="active"
                  to="/initiative"
                >
                  <Icon white><i className="fas fa-lightbulb" /></Icon>
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ml-2 mr-2">
                <NavLink
                  tag={RouterNavLink}
                  className="active"
                  to="/mission"
                >
                  <Icon white><i className="fas fa-rocket" /></Icon>
                </NavLink>
              </NavItem>

              <NavItem className="p-2 ml-2 mr-2">
                <NavLink
                  tag={RouterNavLink}
                  className="active"
                  to="/users"
                >
                  <Icon white><i className="fas fa-users" /></Icon>
                </NavLink>
              </NavItem>

              <NavItem className="p-2 ml-2 mr-2">
                <NavLink
                  tag={RouterNavLink}
                  className="active"
                  to="/ecosysteme"
                >
                  <Icon white><i className="fas fa-globe-americas" /></Icon>
                </NavLink>
              </NavItem>

              <NavItem
                className="connexion p-2 ml-2 d-flex align-items-center font-weight-bold p-0 px-4"
                style={{ cursor: 'pointer' }}
              >
                <Text className="m-0" onClick={this.props.authSignIn}>
                  Connexion
                  <i className="fas fa-sign-in-alt mr-1 ml-1" />
                </Text>
              </NavItem>
              {/* <UncontrolledDropdown className="connexion p-2 ml-2 d-flex align-items-center" nav inNavbar >
                <DropdownToggle className="mx-4 font-weight-bold p-0" nav>
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem
                    tag={RouterNavLink}
                    className="active"
                    to="/profil/initiative"
                  >
                    connexion profil 1
                  </DropdownItem>
                  <DropdownItem
                  >
                    Votre profil
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    tag={RouterNavLink}
                    className="active"
                    to="/"
                  >
                    Deconnexion
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
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