import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { eventsFetchRequest, eventsFetchSuccess, eventsFetchError } from '../actions/actionsEvents'
import EvenementsList from '../components/Evenements/EvenementsList';

class EvenementsListContainer extends Component {

  componentDidMount() {
    const {
      eventsFetchRequest, eventsFetchSuccess, eventsFetchError
    } = this.props;
    eventsFetchRequest();
    axios.get('/api/event')
      .then(res => res.data)
      .then(events => eventsFetchSuccess(events))
      .catch(error => eventsFetchError(error.response));
  }

  render() {
    const { error, events } = this.props;
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
});

const mapDispatchToProps = {
  eventsFetchRequest, eventsFetchSuccess, eventsFetchError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvenementsListContainer);
