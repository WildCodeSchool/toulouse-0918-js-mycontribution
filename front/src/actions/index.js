export const EVENTS_FETCH_REQUEST = 'EVENTS_FETCH_REQUEST';
export const EVENTS_FETCH_SUCCESS = 'EVENTS_FETCH_SUCCESS';
export const EVENTS_FETCH_ERROR = 'EVENTS_FETCH_ERROR';
// actions concernant l'authentification
export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNUP = 'AUTH_SIGNUP';
export const AUTH_SIGNUP_CLOSE = 'AUTH_SIGNUP_CLOSE';
export const AUTH_SIGNIN_BACK = 'AUTH_SIGNIN_BACK';
export const USER_AUTH = 'USER_AUTH';
export const USER_OUT = 'USER_OUT';
// ajout des actions pour la liste des contributeurs;
export const USERS_FETCH_REQUEST = 'USERS_FETCH_REQUEST';
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
export const USERS_FETCH_ERROR = 'USERS_FETCH_ERROR';
// actions pour le formulaire de creation de projets
export const FORM_NEW_PROJECT = 'FORM_NEW_PROJECT'
export const FORM_CHANGE_FIELD = 'FORM_CHANGE_FIELD'
export const FORM_CHANGE_EVENT_FIELD   = 'FORM_CHANGE_EVENT_FIELD';
export const FORM_ADD_EVENT = 'FORM_ADD_EVENT';


export const eventsFetchRequest = () => ({
  type: EVENTS_FETCH_REQUEST
});

export const eventsFetchSuccess = (events) => ({
  type: EVENTS_FETCH_SUCCESS,
  events
});

export const eventsFetchError = (error) => ({
  type: EVENTS_FETCH_ERROR,
  error
});

// actions concernant l'authentification
export const authSignIn = () => ({
  type: AUTH_SIGNIN
});

export const authSignUp = () => ({
  type: AUTH_SIGNUP
});

export const authSignUpClose = () => ({
  type: AUTH_SIGNUP_CLOSE
});

export const authSignInBack = () => ({
  type: AUTH_SIGNIN_BACK
});

export const userAuth = (user) => ({
  type: USER_AUTH,
  user
});

export const userOut = () => ({
  type: USER_OUT
});

// ajout des actions pour la liste des contributeurs;
export const usersFetchRequest = () => ({
  type: USERS_FETCH_REQUEST
});

export const usersFetchSuccess = (users) => ({
  type: USERS_FETCH_SUCCESS,
  users
});

export const usersFetchError = (error) => ({
  type: USERS_FETCH_ERROR,
  error
});


// actions pour le formulaire de creation de projets
export const formNewProject = (projectType) => {
  return {
    type: FORM_NEW_PROJECT,
    projectType
  }
}

export const formChangeField = (key, value) => {
  return {
    type: FORM_CHANGE_FIELD,
    key,
    value
  }
}

export const formChangeEventField = (key, value, index) => {
  return {
    type: FORM_CHANGE_EVENT_FIELD,
    key,
    value,
    index
  }
}

export const formAddEvent = (index) => {
  return {
    type: FORM_ADD_EVENT, index
  }
}
