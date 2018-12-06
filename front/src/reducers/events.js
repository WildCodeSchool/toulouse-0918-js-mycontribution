import { EVENTS_FETCH_REQUEST, EVENTS_FETCH_SUCCESS, EVENTS_FETCH_ERROR } from '../actions/actionsEvents';

const initialState = {
  loading: false,
  events: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case EVENTS_FETCH_REQUEST: 
      return { ...state, loading: true }
    case EVENTS_FETCH_SUCCESS:
      return { ...state, loading: false, events: action.events }
    case EVENTS_FETCH_ERROR:
      return { ...state, loading: false, error: action.error }  
    default:
      return state
  }
}

export default reducer;