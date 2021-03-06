import '../css/Navigation.scss';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import ConnexionInscription from './connexion-inscription/ConnexionInscription';
import { authSignIn, userOut, userAuth } from '../actions';
import logo from '../img/logo.png';
import logoConti from '../img/logo-continental.png';
import { Icon, Text, ContainerDropdown, TextDrop } from '../data/styledComponents';
import instance from '../helpers/instance';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      dropdownOpenUser: false

    };
    this.toggle = this.toggle.bind(this);
    this.toggleUser = this.toggleUser.bind(this);
    this.toggleProject = this.toggleProject.bind(this);
    this.userDeconnexion = this.userDeconnexion.bind(this);
  }

  componentDidMount() {
    // Remplacé par récupération du token à l'initialisation
    // du reducer auth => on est sûr que si l'user est connecté,
    // ses infos et son token sont dans le store Redux
    // const token = localStorage.getItem('token');
    // if (token) {
    //   const { userAuth } = this.props;
    //   const decoded = jwt_decode(token);
    //   userAuth(decoded, token);
    // }
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  toggleProject() {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen
    });
  }

  toggleUser() {
    const { dropdownOpenUser } = this.state;
    this.setState({
      dropdownOpenUser: !dropdownOpenUser
    });
  }

  userDeconnexion() {
    const { userOut } = this.props;
    delete instance.defaults.headers;
    localStorage.removeItem('token');
    userOut();
  }

  render() {
    const { isOpen, dropdownOpen, dropdownOpenUser } = this.state;
    const { authSignIn, user } = this.props;
    return (
      <div>
        <Navbar className="navigation p-0 fixed-top" style={{ height: '80px' }} expand="lg" light>
          <div>
            <img src={logoConti} alt={logoConti} className="p-2 logo-continental" />
          </div>

          <NavbarBrand tag={RouterNavLink} to="/" className="ml-4 d-none d-md-block">
            <img src={logo} alt={logo} />
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-lg-auto" navbar>

              <NavItem className="p-2 ml-2">
                <NavLink
                  tag={RouterNavLink}
                  className="active"
                  to="/evenements"
                >
                  <Icon white><i className="fas fa-calendar-alt" /></Icon>
                </NavLink>
              </NavItem>

              <NavItem className="p-2 ml-2" style={{ display: 'inline' }}>
                <NavLink
                  tag={RouterNavLink}
                  className="active"
                  to="/initiative"
                >
                  <Icon white><i className="fas fa-lightbulb" /></Icon>
                </NavLink>
              </NavItem>

              <NavItem className="p-2 ml-2">
                <NavLink
                  tag={RouterNavLink}
                  className="active"
                  to="/mission"
                >
                  <Icon white><i className="fas fa-rocket" /></Icon>
                </NavLink>
              </NavItem>

              <NavItem className="p-2 ml-2">
                <NavLink
                  tag={RouterNavLink}
                  className="active"
                  to="/users"
                >
                  <Icon white><i className="fas fa-users" /></Icon>
                </NavLink>
              </NavItem>

              <NavItem className="p-2 ml-2">
                <NavLink
                  tag={RouterNavLink}
                  className="active"
                  to="/ecosysteme"
                >
                  <Icon white><i className="fas fa-globe-americas" /></Icon>
                </NavLink>
              </NavItem>

              {user
                ? (
                  <Fragment>
                    <NavItem>
                      <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggleProject} direction="down">
                        <DropdownToggle className="p-2 ml-2" style={{ backgroundColor: 'black', border: 'black' }}>
                          <Icon style={{ color: 'orange' }}><i className="fas fa-plus-circle" /></Icon>
                        </DropdownToggle>
                        <DropdownMenu className="p-0">
                          <DropdownItem to="/creer-initiative" tag={Link}>
                            <Text>
                              <i className="fas fa-lightbulb mr-2" />
                              Créer une initiative
                            </Text>
                          </DropdownItem>
                          <DropdownItem to="/creer-mission" tag={Link} className="dark">
                              <Text className="m-0" white>
                                <i className="fas fa-rocket mr-2" />
                                Créer une mission
                              </Text>
                          </DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </NavItem>

                    <NavItem>
                      <ButtonDropdown isOpen={dropdownOpenUser} toggle={this.toggleUser} direction="down">
                        <DropdownToggle className="p-2 ml-2" style={{ backgroundColor: 'black', border: 'black' }}>
                          <img alt="Profil" src={user.picture} style={{ maxHeight: '50px' }} />
                        </DropdownToggle>
                        <DropdownMenu className="p-0">
                          <DropdownItem tag={Link} to="/profil/favorite">
                            <TextDrop className="m-0">
                              Profil
                            </TextDrop>
                          </DropdownItem>
                          <DropdownItem className="p-0" onClick={this.userDeconnexion} style={{ textDecoration: 'none' }}>
                            <ContainerDropdown darkGrey>
                              <TextDrop className="m-0" white>
                                Déconnexion
                              </TextDrop>
                            </ContainerDropdown>
                          </DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </NavItem>
                  </Fragment>
                )
                : (
                  <NavItem
                    className="ml-lg-2 d-flex align-items-center font-weight-bold px-4"
                    style={{ cursor: 'pointer' }}
                  >
                    <Text className="m-0" onClick={authSignIn} style={{ color: '#F5A214' }}>
                      Connexion
                      <i className="fas fa-sign-in-alt mr-1 ml-1" />
                    </Text>
                  </NavItem>
                )
              }
            </Nav>
          </Collapse>
        </Navbar>
        <ConnexionInscription />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = {
  authSignIn, userOut, userAuth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
