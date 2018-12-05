import React, { Component } from 'react';
import InitiativesList from '../components/Initiatives/InitiativesList'
import axios from 'axios';


class InitiativesListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      initiatives : []
    }
  }

// componentDidMount() {
//   this.fetchInitiatives();
// }

// fetchInitiatives() {
//   axios.get('/api/initiatives')
//     .then(res => res.data)
//     .then(initiatives =>  this.setState({ initiatives }))
//     .catch(error => this.setState({ error }))
// }

  render() {
    const { error, initiatives} = this.state;
    return (
      <div>
        <InitiativesList missions={initiatives} />
        
      {/* {
        error 
          ? <div> {error.message} </div>
          : <MissionsList initiatives={initiatives} />
      } */}
      </div>

    );
  }
}

export default InitiativesListContainer;