import { PROJECTS_FETCH_REQUEST, PROJECTS_FETCH_SUCCESS, PROJECTS_FETCH_ERROR } from '../actions/actionsProjects';

const initialState = {
  loading: false,
  initiative: [],
  mission: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case PROJECTS_FETCH_REQUEST: 
      return { ...state, loading: true }
    case PROJECTS_FETCH_SUCCESS:
      return { ...state, loading: false, [action.projecType] : action.project }
    case PROJECTS_FETCH_ERROR:
      return { ...state, loading: false, error: action.error }  
    default:
      return state
  }
}

export default reducer;