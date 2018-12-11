import React, { Component } from 'react';
import ContributeursList from '../components/Contributeurs/ContributeursList'
import axios from 'axios';


class ContributeursListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      contributeurs : []
    }
  }

componentDidMount() {
  this.fetchContributeurs();
}

fetchContributeurs() {
  axios.get('/api/user')
    .then(res => res.data)
    .then(contributeurs =>  this.setState({ contributeurs }))
    .catch(error => this.setState({ error }))
}

  render() {
    const { error, contributeurs} = this.state;
    return (
      <div>
        <ContributeursList contributeurs={contributeurs} />
        
      {
        error 
          ? <div> {error.message} </div>
          : <ContributeursList contributeurs={contributeurs} />
      }
      </div>

    );
  }
}

export default ContributeursListContainer;