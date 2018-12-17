import { combineReducers } from 'redux';
import events from './events';
import auth from './auth';
// import initiative from './initiatives'
import project from './projects'

const reducer = combineReducers({
  events, auth, project
});

export default reducer