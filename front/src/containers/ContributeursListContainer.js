import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ContributeursList from '../components/Contributeurs/ContributeursList';
import { usersFetchRequest, usersFetchSuccess, usersFetchError } from '../actions';

const parseQueryString = queryString =>
  queryString
    .substr(1)
    .split('&')
    .reduce((carry, segment) => {
      const [key, value] = segment.split('=');
      return { ...carry, [key]: value };
    }, {});
  
class ContributeursListContainer extends Component {
  componentDidMount() {
    // Récupérer ?page=n
    this.props.usersFetchRequest();
    axios.get('/api/users')
      .then(res => res.data)
      .then(users => this.props.usersFetchSuccess(users))
      .catch(error => this.props.usersFetchError(error))
  }

  render() {
    const { search } = this.props.location;
    const query = parseQueryString(search);
    const page = query.page ? Number(query.page) : 1;
    return <ContributeursList currentPage={page} />;
  }
}
const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error
});

const mapDispatchToProps = {
  usersFetchRequest, usersFetchSuccess, usersFetchError
};

export default connect(mapStateToProps, mapDispatchToProps)(ContributeursListContainer);
