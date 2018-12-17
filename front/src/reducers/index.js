import { combineReducers } from 'redux';
import events from './events';
import auth from './auth';
import users from './users';

const reducer = combineReducers({
  events, auth, users
});

export default reducer;
