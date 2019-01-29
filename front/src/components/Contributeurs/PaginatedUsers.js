import React, { Component } from 'react';
import { compose } from 'recompose';
import { Container, Row, Col } from 'reactstrap';
import withRedux from '../../hoc/withRedux';
import withPagination from '../../hoc/withPagination';
import { usersFetchRequest, usersFetchSuccess, usersFetchError } from '../../actions';
import { StyledContainer, Line, Subtitle, Text } from '../../data/styledComponents';
import ContributeurItem from './ContributeurItem';
import '../../css/ContributeursList.scss';

class PaginatedUsers extends Component {
  constructor(props) {
    super(props);
    let { search } = props.location
    this.state = {
      search: search ? search.substr(1) : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    console.log(target.value)
    if (!target.value) {
      const { history, match: { path } } = this.props;
      history.push(path);
    }
    this.setState({ search: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { history, match: { path } } = this.props;
    const { search } = this.state;
    history.push(`${path}?search=${search}`);
  }

  render() {
    const { items } = this.props;
    return (
      <StyledContainer className="ContributeursList">
        <Container>
    
          <Row className="d-flex justify-content-end">
            <form onSubmit={this.handleSubmit}>
              <i className="fas fa-search fa-fw mr-2"></i>
              <input className="mr-2" type="text" name="inputSearch" id="inputSearch" placeholder="Rechercher..." onChange={this.handleChange} />
              <button type="submit" className="btn btn-light" name="buttonSearch" id="buttonSearch">Rechercher</button>
            </form>
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
              {items.map(user => <ContributeurItem key={user.id} {...user} />)}
            </Col>
          </Row>
        </Container>
      </StyledContainer>
    );
  }
}

export default compose(
  // withFilter,
  withRedux(
    '/api/users', [usersFetchRequest, usersFetchSuccess, usersFetchError], 'users', 'users'
  ),
  withPagination
)(PaginatedUsers);
