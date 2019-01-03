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
      usersPerPage: 10
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    const {users} = this.props;
    const { currentPage, usersPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.users.slice(indexOfFirstUser, indexOfLastUser);
    console.log(currentUsers)

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.users.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
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
              {currentUsers.map(user => <ContributeurItem key={user.id} {...user} />)};
            </Col>
          </Row>
          <div>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        </Container>
      </StyledContainer>
    );
  }
}

const mapStateToProps = state => { return { users: state.users }; };


export default connect(
  mapStateToProps
)(ContributeursList);
