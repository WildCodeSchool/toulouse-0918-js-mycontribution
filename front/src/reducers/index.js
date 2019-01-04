import { combineReducers } from 'redux';
import events from './events';
import auth from './auth';
import createForm from './createForm';
import project from './projects'
import users from './users';

const reducer = combineReducers({
  events, auth, createForm, users, project
});

export default reducer;
