import { PROFIL_FETCH_PROJECTS_REQUEST, PROFIL_FETCH_PROJECTS_SUCCESS, PROFIL_FETCH_PROJECTS_ERROR } from '../actions';

const initialState = {
  loading: false,
  projects: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFIL_FETCH_PROJECTS_REQUEST: 
      return { ...state, loading: true }
    case PROFIL_FETCH_PROJECTS_SUCCESS:
      return { ...state, loading: false, events: action.projects }
    case PROFIL_FETCH_PROJECTS_ERROR:
      return { ...state, loading: false, error: action.error }  
    default:
      return state;
  }
}

export default reducer;
