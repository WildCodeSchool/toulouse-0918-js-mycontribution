import React, { Component } from 'react';
import '../../css/lists.scss';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle, Text } from '../../data/styledComponents';
import ContributeurItem from './ContributeurItem';
import withFilter from '../../hoc/withFilter';
import './index.css';

class ContributeursList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 10,
      usersPerPage: 8,
      test: 0,
      bold: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.addTenToNumber = this.addTenToNumber.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
      bold: 'font-weight-bold'
    });
  }

  addTenToNumber() {
    const test = this.state.test
    this.setState({
      test: test + 10
    });
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

    const { currentPage, usersPerPage } = this.state;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.forEach(number => {
      if (number < 10) {
        return (
          <li
            className="mr-3 list-inline-item"
            key={number + this.state.test}
            id={number + this.state.test}
            onClick={this.handleClick}
          >
            {number + this.state.test}
          </li>
        );
      }
    });

    const lastPage = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      lastPage.push(i);
    }

    const renderLastPage = lastPage.map(number => {
      return (
        <li className={`mr-1 list-inline-item ${this.state.bold}`} key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

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
        <Container>
          <Col>
            <ul style={{ fontSize: '2em', cursor: 'pointer' }}
              className="list-unstyled list-inline mt-3" id="page-numbers">

              {/* currentPage */}
              <Text>{renderPageNumbers}</Text>

              {/* arrow for next 10 */}
              <i onClick={this.addTenToNumber} class="fas fa-arrow-right" />

              {/* Last Page */}
              <Text>{renderLastPage[renderLastPage.length - 1]}</Text>
            </ul>
          </Col>
        </Container>
      </StyledContainer>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps)(withFilter(ContributeursList));
