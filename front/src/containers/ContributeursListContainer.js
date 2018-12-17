import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ContributeursList from '../components/Contributeurs/ContributeursList';
import { usersFetchRequest, usersFetchSuccess, usersFetchError } from '../actions';


class ContributeursListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.props.usersFetchRequest();
    axios.get('/api/users')
      .then(res => res.data)
      .then(users => this.props.usersFetchSuccess(users))
      .catch(error => this.props.usersFetchError(error))
  }

  render() {
    return (
      <div>
        <ContributeursList />
      </div>

    );
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
