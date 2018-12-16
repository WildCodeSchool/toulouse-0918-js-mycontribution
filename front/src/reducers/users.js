import { USERS_FETCH_REQUEST, USERS_FETCH_SUCCESS, USERS_FETCH_ERROR } from '../actions';

const initialState = {
  loading: false,
  users: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCH_REQUEST:
      return { ...state, loading: true };
    case USERS_FETCH_SUCCESS:
      return { ...state, loading: false, events: action.users };
    case USERS_FETCH_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default reducer;
