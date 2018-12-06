import { INITIATIVES_FETCH_REQUEST, INITIATIVES_FETCH_SUCCESS, INITIATIVES_FETCH_ERROR } from '../actions/actionsInitiatives';

const initialState = {
  loading: false,
  initiative: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INITIATIVES_FETCH_REQUEST: 
      return { ...state, loading: true }
    case INITIATIVES_FETCH_SUCCESS:
      return { ...state, loading: false, initiative: action.initiative }
    case INITIATIVES_FETCH_ERROR:
      return { ...state, loading: false, error: action.error }  
    default:
      return state
  }
}

export default reducer;