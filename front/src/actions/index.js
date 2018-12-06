export const EVENTS_FETCH_REQUEST = 'EVENTS_FETCH_REQUEST'
export const EVENTS_FETCH_SUCCESS = 'EVENTS_FETCH_SUCCESS'
export const EVENTS_FETCH_ERROR = 'EVENTS_FETCH_ERROR'
export const AUTH_SIGNIN = 'AUTH_SIGNIN'
export const AUTH_SIGNUP = 'AUTH_SIGNUP'
export const AUTH_SIGNUP_CLOSE = 'AUTH_SIGNUP_CLOSE'
export const AUTH_SIGNIN_BACK = 'AUTH_SIGNIN_BACK'

export const eventsFetchRequest = () => {
  return {
    type: EVENTS_FETCH_REQUEST
  }
}

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