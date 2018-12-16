import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ContributeursList from '../components/Contributeurs/ContributeursList';
import { contributeursFetchRequest, contributeursFetchSuccess, contributeursFetchError } from '../actions'


class ContributeursListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.contributeursFetchRequest()
    axios.get('/api/contributeurs')
     .then(res => res.data)
     .then(contributeurs => this.props.contributeursFetchSuccess(contributeurs))
     .catch(error => this.props.contributeursFetchError(error.response.data))
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
  contributeurs: state.contributeurs.contributeurs,
  loading: state.contributeurs.loading,
  error: state.contributeurs.error
});

const mapDispatchToProps = {
  contributeursFetchRequest, contributeursFetchSuccess, contributeursFetchError
};

export default connect(mapStateToProps, mapDispatchToProps)(ContributeursListContainer);
