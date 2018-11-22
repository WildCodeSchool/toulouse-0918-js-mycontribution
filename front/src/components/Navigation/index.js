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
        <Navbar style={{ padding: 0 }}
          className='bg-dark mb-1'
          light expand="md">
          <NavbarBrand className='text-white ml-4' href="/">
            MyContribution
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className='p-2 ml-2'>
                <NavLink
                  className='text-white'
                  href="#">
                  <i style={{ fontSize: '2.5em' }}
                    className="fas fa-lightbulb">
                  </i>
                </NavLink>
              </NavItem>
              <NavItem className='p-2 ml-2 mr-2'>
                <NavLink
                  className='text-white'
                  href="#">
                  <i style={{ fontSize: '2.5em' }}
                    className="fas fa-rocket">
                  </i>
                </NavLink>
              </NavItem>
              <NavItem className='p-2 ml-2 mr-2'>
                <NavLink
                  className='text-white'
                  href="#">
                  <i
                    className="fas fa-users"
                    style={{ fontSize: '2.5em' }}>
                  </i>
                </NavLink>
              </NavItem>
              <NavItem className='p-2 ml-2 mr-2'>
                <NavLink
                  className='text-white'
                  href="#">
                  <i
                    className="fas fa-globe-americas"
                    style={{ fontSize: '2.5em' }}>
                  </i>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                className='bg-warning p-2 ml-2'
                nav
                inNavbar>
                <DropdownToggle
                className='ml-4 mr-4'
                  nav
                >
                  Connexion
                  <i
                    className="fas fa-sign-in-alt mr-1 ml-1"
                    style={{ fontSize: '2em' }}>
                  </i>
                </DropdownToggle>
                <DropdownMenu style={{}}>
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