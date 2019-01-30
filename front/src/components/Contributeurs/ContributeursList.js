import React, { Component } from 'react';
import '../../css/lists.scss';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { StyledContainer, Line, Subtitle, Text } from '../../data/styledComponents';
import ContributeurItem from './ContributeurItem';
import withFilter from '../../hoc/withFilter';
import './index.css';

const usersPerPage = 8;

class ContributeursList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      test: 0,
      bold: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.subTenToNumber = this.subTenToNumber.bind(this);
    this.addTenToNumber = this.addTenToNumber.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
      bold: 'font-weight-bold'
    });
  }

  addTenToNumber() {
    const { users } = this.props;
    this.setState(
      ({ currentPage }) => ({
        currentPage: Math.min(currentPage + 10, users.length - 1)
      })
    );
  }

  subTenToNumber() {
    this.setState(
      ({ currentPage }) => ({
        currentPage: Math.max(currentPage - 10, 0)
      })
    );
  }

  componentDidUpdate(prevProps) {
    const { currentPage } = this.props;
    if(currentPage !== prevProps.currentPage) {
      this.setState({ currentPage: currentPage - 1 });
    }
  }

  renderPageNumbers() {
    const { users } = this.props;
    const { currentPage } = this.state;
    if (!users.length) {
      return;
    }
    const numUsers = users.length;
    const baseIndex = usersPerPage * Math.floor(currentPage / usersPerPage);
    const relativeIndex = currentPage - baseIndex;
    const maxIndex = Math.min(numUsers - 1, baseIndex + usersPerPage - 1);
    const numPages = maxIndex - baseIndex + 1;
    return new Array(numPages)
      .fill(0)
      .map((item, index) => (
        <NavLink
          key={index}
          className={index === relativeIndex ? 'active':''}
          to={`/users?page=${index + 1}`}
        >
          {index + 1}
        </NavLink>
      ));
  } 

  render() {
    let { users } = this.props;

    // filtre des users sur tous les champs
    users = users.filter(user => {
      let { id } = this.props;
      if (id[0] === 0) {
        return true;
      } else {
        for (let i = 0; i < id.length; i++) {
          if (user.id === id[i]) {
            return true;
          }
        }
        return false;
      }
    });

    const { currentPage } = this.state;
    const indexOfFirstUser = currentPage * usersPerPage;
    const indexOfLastUser = indexOfFirstUser + usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    console.log(currentPage, indexOfFirstUser, usersPerPage, indexOfLastUser);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <StyledContainer className="lists">
        <Container>

        <Row className="d-flex justify-content-end">
              <Text className="mb-5">
                <span>
                  <i className="fas fa-search fa-fw mr-2"></i>
                  <input className="mr-2" type="text" name="inputSearch" id="inputSearch" placeholder="Rechercher..." onChange={this.props.handleSearch} />
                  <button type="button" className="btn btn-light" name="buttonSearch" id="buttonSearch" onClick={this.props.searchId}>Rechercher</button>
                </span>
              </Text>
            </Row>

          <Row>
            <Col>
              <Subtitle>
                <i className="fas fa-users fa-fw mr-2" />
                Tous les contributeurs
              </Subtitle>
              <Line />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              {currentUsers.map(user => <ContributeurItem key={user.id} {...user} />)}
            </Col>
          </Row>
        </Container>
        <Container
          className="Pagination mt-3 d-flex justify-content-center align-items-center"
          id="page-numbers">

            {/* arrow for next 10 */}
            <i
              onClick={this.subTenToNumber}
              className="fas fa-arrow-left" />

            {/* currentPage */}
            {this.renderPageNumbers()}

            {/* arrow for next 10 */}
            <i
              onClick={this.addTenToNumber}
              className="fas fa-arrow-right" />

            {/* Last Page */}
        </Container>
      </StyledContainer>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps)(withFilter(ContributeursList));
