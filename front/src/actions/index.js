export const EVENTS_FETCH_REQUEST = 'EVENTS_FETCH_REQUEST';
export const EVENTS_FETCH_SUCCESS = 'EVENTS_FETCH_SUCCESS';
export const EVENTS_FETCH_ERROR = 'EVENTS_FETCH_ERROR';
export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNUP = 'AUTH_SIGNUP';
export const AUTH_SIGNUP_CLOSE = 'AUTH_SIGNUP_CLOSE';
export const AUTH_SIGNIN_BACK = 'AUTH_SIGNIN_BACK';
// ajout des actions pour le profil, liste mes missions , liste mes initiatives, mes favoris;
export const PROFIL_FETCH_MISSION_REQUEST = 'PROFIL_FETCH_MISSION_REQUEST';
export const PROFIL_FETCH_MISSION_SUCCESS = 'PROFIL_FETCH_MISSION_SUCCESS';
export const PROFIL_FETCH_MISSION_ERROR = 'PROFIL_FETCH_MISSION_ERROR';


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

// ajout des exports pour le profil, liste mes missions , liste mes initiatives, mes favoris;
export const profilFetchMissionRequest = () => {
  return {
    type: PROFIL_FETCH_MISSION_REQUEST
  }
}
export const profilFetchMissionSuccess = (mission) => {
  return {
    type: PROFIL_FETCH_MISSION_SUCCESS,
    mission
  }
}
export const profilFetchMissionError = (error) => {
  return {
    type: PROFIL_FETCH_MISSION_ERROR,
    error
  }
}