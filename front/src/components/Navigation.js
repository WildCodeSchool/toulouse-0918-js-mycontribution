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
import logo from '../img/logo.png';
import { Icon, Text } from '../data/styledComponents';

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
          className="navigation fixed-top"
          light expand="md">
          <NavbarBrand tag={RouterNavLink} activeClassName="active" to="/" className="text-white ml-4">
            <img src={logo} />
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="p-2 ml-2">
                <NavLink tag={RouterNavLink} activeClassName="active" to="/liste-events"
                  className="text-white">
                  <Icon white><i className="fas fa-calendar-alt"></i></Icon>
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ml-2">
                <NavLink tag={RouterNavLink} activeClassName="active" to="/liste-initiatives"
                  className="text-white">
                  <Icon white><i className="fas fa-lightbulb"></i></Icon>
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ml-2 mr-2">
                <NavLink tag={RouterNavLink} activeClassName="active" to="/liste-missions"
                  className="text-white">
                  <Icon white><i className="fas fa-rocket"></i></Icon>
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ml-2 mr-2">
                <NavLink
                  className="text-white"
                  href="#">
                  <Icon white><i className="fas fa-users"></i></Icon>
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ml-2 mr-2">
                <NavLink
                  className="text-white"
                  href="#">
                  <Icon white><i className="fas fa-globe-americas"></i></Icon>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                className="connexion p-2 ml-2 "
                nav
                inNavbar
              >
                <DropdownToggle
                  className="mx-4 font-weight-bold"
                  nav
                >
                 <Text>
                    Connexion
                    <i className="fas fa-sign-in-alt mr-1 ml-1"></i>
                </Text>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
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