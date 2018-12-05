import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink as RouterNavLink } from 'react-router-dom';
import '../css/Navigation.scss'

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
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
                <NavLink tag={RouterNavLink} activeClassName="active" to="/initiative"
                  className="text-white">
                  <i style={{ fontSize: '2.5em' }}
                    className="fas fa-lightbulb">
                  </i>
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ml-2 mr-2">
                <NavLink tag={RouterNavLink} activeClassName="active" to="/mission"
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
              <UncontrolledDropdown
                className="connexion p-2 ml-2"
                nav
                inNavbar>
                <DropdownToggle
                  className="ml-4 mr-4 font-weight-bold"
                  nav
                >
                  Connexion
                  <i
                    className="fas fa-sign-in-alt mr-1 ml-1"
                    style={{ fontSize: '2em' }}>
                  </i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    tag={RouterNavLink}
                    activeClassName="active"
                    to="/profil/favoris"
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
                    activeClassName="active"
                    to="/"
                  >
                    Deconnexion
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;