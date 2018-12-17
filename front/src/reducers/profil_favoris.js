import { PROFIL_FETCH_FAVORIS_REQUEST, PROFIL_FETCH_FAVORIS_SUCCESS, PROFIL_FETCH_FAVORIS_ERROR } from '../actions';

const initialState = {
  loading: false,
  favoris: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFIL_FETCH_FAVORIS_REQUEST: 
      return { ...state, loading: true }
    case PROFIL_FETCH_FAVORIS_SUCCESS:
      return { ...state, loading: false, events: action.favoris }
    case PROFIL_FETCH_FAVORIS_ERROR:
      return { ...state, loading: false, error: action.error }  
    default:
      return state;
  }
}

export default reducer;