import { combineReducers } from 'redux';
import events from './events';
import auth from './auth';
import createForm from './createForm';

const reducer = combineReducers({
  events, auth, createForm
});

export default reducer;