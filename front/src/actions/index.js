export const EVENTS_FETCH_REQUEST = 'EVENTS_FETCH_REQUEST';
export const EVENTS_FETCH_SUCCESS = 'EVENTS_FETCH_SUCCESS';
export const EVENTS_FETCH_ERROR = 'EVENTS_FETCH_ERROR';
export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNUP = 'AUTH_SIGNUP';
export const AUTH_SIGNUP_CLOSE = 'AUTH_SIGNUP_CLOSE';
export const AUTH_SIGNIN_BACK = 'AUTH_SIGNIN_BACK';
// ajout des actions pour le profil, liste mes PROJECTS , liste mes initiatives, mes favoris;
export const PROFIL_FETCH_PROJECTS_REQUEST = 'PROFIL_FETCH_PROJECTS_REQUEST';
export const PROFIL_FETCH_PROJECTS_SUCCESS = 'PROFIL_FETCH_PROJECTS_SUCCESS';
export const PROFIL_FETCH_PROJECTS_ERROR = 'PROFIL_FETCH_PROJECTS_ERROR';


export const eventsFetchRequest = () => {
  return {
    type: EVENTS_FETCH_REQUEST
  };
};

export const eventsFetchSuccess = (events) => {
  return {
    type: EVENTS_FETCH_SUCCESS,
    events
  }
}

export const eventsFetchError = (error) => {
  return {
    type: EVENTS_FETCH_ERROR,
    error
  }
}

export const authSignIn = () => {
  return {
    type: AUTH_SIGNIN
  }
}

export const authSignUp = () => {
  return {
    type: AUTH_SIGNUP
  }
}

export const authSignUpClose = () => {
  return {
    type: AUTH_SIGNUP_CLOSE
  }
}

export const authSignInBack = () => {
  return {
    type: AUTH_SIGNIN_BACK
  }
}

// ajout des exports pour le profil, liste mes PROJECTS , liste mes initiatives, mes favoris;
export const profilFetchProjectsRequest = () => {
  return {
    type: PROFIL_FETCH_PROJECTS_REQUEST
  }
}
export const profilFetchProjectsSuccess = (projects) => {
  return {
    type: PROFIL_FETCH_PROJECTS_SUCCESS,
    projects
  }
}
export const profilFetchProjectsError = (error) => {
  return {
    type: PROFIL_FETCH_PROJECTS_ERROR,
    error
  }
}