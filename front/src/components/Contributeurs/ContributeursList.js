import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents';
import ContributeurItem from './ContributeurItem';
import './index.css';

class ContributeursList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      usersPerPage: 8
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    const { users } = this.props;
    const { currentPage, usersPerPage } = this.state;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.users.slice(indexOfFirstUser, indexOfLastUser);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.users.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if (number < 10) {
        return (
          <li className="mr-1 list-inline-item" key={number} id={number} onClick={this.handleClick}>
            {number}
          </li>
        );
      }
    });

    const lastPage = [];
    for (let i = 1; i <= Math.ceil(users.users.length / usersPerPage); i++) {
      lastPage.push(i);
    }

    const renderLastPage = lastPage.map(number => {
      return (
        <li className="mr-1 list-inline-item" key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <StyledContainer style={{ marginTop: '10%' }}>
        <Container>
          <Row>
            <Col>
              <Subtitle>
                <i className="fas fa-users fa-fw mr-2" />
                Tous les contributeurs
              </Subtitle>
              <Line />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              {currentUsers.map(user => <ContributeurItem key={user.id} {...user} />)}
            </Col>
          </Row>
          <Col className="">
            <ul style={{ fontSize: '2em', cursor: 'pointer' }}
              className="list-unstyled list-inline" id="page-numbers">
              {renderPageNumbers} ... {renderLastPage[renderLastPage.length - 1]}
            </ul>
          </Col>
        </Container>
      </StyledContainer>
    );
  }
}

const mapStateToProps = state => { return { users: state.users }; };

export default connect(
  mapStateToProps
)(ContributeursList);
