import { combineReducers } from 'redux';
import events from './events';
import auth from './auth';
import createForm from './createForm';
import project from './projects'
import users from './users';
import favorites from './favorites';

const reducer = combineReducers({
  events, auth, createForm, users, project, favorites
});

export default reducer;
