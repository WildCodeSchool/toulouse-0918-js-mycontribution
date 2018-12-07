import { combineReducers } from 'redux';
import events from './events';
import auth from './auth';
import initiative from './initiatives'

const reducer = combineReducers({
  events, auth, initiative
});

export default reducer