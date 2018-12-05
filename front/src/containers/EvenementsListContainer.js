import React, { Component } from 'react';
import EvenementsList from '../components/Evenements/EvenementsList'
import axios from 'axios';


class EvenementsListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      evenements : []
    }
  }

// componentDidMount() {
//   this.fetchEvenements();
// }

// fetchEvenements() {
//   axios.get('/api/evenements')
//     .then(res => res.data)
//     .then(evenements =>  this.setState({ evenements }))
//     .catch(error => this.setState({ error }))
// }

  render() {
    const { error, evenements} = this.state;
    return (
      <div>
        <EvenementsList evenements={evenements} />
        
      {/* {
        error 
          ? <div> {error.message} </div>
          : <MissionsList evenements={evenements} />
      } */}
      </div>

    );
  }
}

export default EvenementsListContainer;