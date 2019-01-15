
import React, { Component } from 'react';
import '../../css/lists.scss';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle, Text } from '../../data/styledComponents';
import ContributeurItem from './ContributeurItem';
import withFilter from '../../hoc/withFilter';
import './index.css';
import Pagination from './Pagination';

class ContributeursList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageOfUsers: []
    }
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfUsers) {
    // update state with new page of items
    this.setState({ pageOfUsers: pageOfUsers });
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

    return (
      <StyledContainer className="lists">
        <Container>
          <Row className="d-flex justify-content-end">
            <Text className="mb-5">
              <span>
                <i className="fas fa-search fa-fw mr-2"></i>
                <input className="mr-2" type="text" name="inputSearch" id="inputSearch" placeholder="Rechercher..." onChange={this.props.handleSearch} />
                <button type="button" className="btn btn-light" name="buttonSearch" id="buttonSearch" onClick={() => this.props.searchId("contributors")}>Rechercher</button>
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
              {this.props.users.map(user => (
                <ContributeurItem key={user.id} {...user} />
              ))}

            </Col>
          </Row>
        </Container>
        <Pagination users={this.props.users} onChangePage={this.onChangePage} pageSize />
      </StyledContainer>
    );
  }
}

function mapStateToProps(state) {
  return ({
    users: state.users.users,
  });
}

export default connect(mapStateToProps)(withFilter(ContributeursList));
