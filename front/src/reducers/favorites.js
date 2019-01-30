import {
  FETCH_FAVORITES_SUCCESS,
  TOGGLE_FAVORITE_PROJECT
} from '../actions';

const reducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_FAVORITES_SUCCESS: {
      return action.projectIds;
    }
    case TOGGLE_FAVORITE_PROJECT: {
      const favorites = [...state];
      const favIndex = favorites.findIndex(id => id === action.projectId);
      if (favIndex !== -1) {
        favorites.splice(favIndex, 1);
      } else {
        favorites.push(action.projectId);
      }
      return favorites;
    }
    default:
    return state;
  }
};

export default reducer;
