import React, { Component } from 'react';
import axios from 'axios';
import { eventsFetchRequest, eventsFetchSuccess, eventsFetchError } from '../actions/actionsEvents'
import { connect } from 'react-redux';
import EvenementsList from '../components/Evenements/EvenementsList';

class EvenementsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error : null,
     // evenements : []
    }
  }

// componentDidMount() {
//   this.fetchEvenements();
// }

// fetchEvenements() {
//   axios.get('/api/event')
//     .then(res => res.data)
//     .then(evenements =>  this.setState({ evenements }))
//     .catch(error => this.setState({ error }))
// }

componentDidMount() {
  this.props.eventsFetchRequest()
  axios.get('/api/event')
    .then(res => res.data)
    .then(events => this.props.eventsFetchSuccess(events))
    .catch(error => this.props.eventsFetchError(error.response.data))
}

  render() {
    const { error, events} = this.props;
    return (
      <div>
      {
        error 
          ? <div> {error.message} </div>
          : <EvenementsList events={events} />
      }
      </div>

    );
  }
}


const mapStateToProps = state => ({
  events: state.events.events,
  loading: state.events.loading,
  error: state.events.error
})

const mapDispatchToProps = {
  eventsFetchRequest, eventsFetchSuccess, eventsFetchError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (EvenementsListContainer)