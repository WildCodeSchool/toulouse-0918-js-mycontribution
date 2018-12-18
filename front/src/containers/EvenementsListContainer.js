import React, { Component } from 'react';
import axios from 'axios';
import EvenementsList from '../components/Evenements/EvenementsList';


class EvenementsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      evenements: []
    }
  }

  componentDidMount() {
    this.fetchEvenements();
  }

  fetchEvenements() {
    axios.get('/api/event')
      .then(res => res.data)
      .then(evenements => this.setState({ evenements }))
      .catch(error => this.setState({ error }))
  }

  render() {
    const { error, evenements } = this.state;
    return (
      <div>
        {error ? <div> {error.message} </div> : <EvenementsList evenements={evenements} />}
      </div>

    );
  }
}

export default EvenementsListContainer;