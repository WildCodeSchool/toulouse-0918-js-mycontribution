import { combineReducers } from 'redux';
import events from './events';
import auth from './auth';
// import initiative from './initiatives'
import project from './projects'
import users from './users';

const reducer = combineReducers({
  events, auth, users, project
});

export default reducer;
