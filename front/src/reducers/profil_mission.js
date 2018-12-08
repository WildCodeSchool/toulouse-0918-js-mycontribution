import { PROFIL_FETCH_MISSION_REQUEST, PROFIL_FETCH_MISSION_SUCCESS, PROFIL_FETCH_MISSION_ERROR } from '../actions';

const initialState = {
  loading: false,
  mission: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFIL_FETCH_MISSION_REQUEST: 
      return { ...state, loading: true }
    case PROFIL_FETCH_MISSION_SUCCESS:
      return { ...state, loading: false, events: action.events }
    case PROFIL_FETCH_MISSION_ERROR:
      return { ...state, loading: false, error: action.error }  
    default:
      return state;
  }
}

export default reducer;
