export const AUTH_SIGNIN = 'AUTH_SIGNIN'
export const AUTH_SIGNUP = 'AUTH_SIGNUP'
export const AUTH_SIGNUP_CLOSE = 'AUTH_SIGNUP_CLOSE'
export const AUTH_SIGNIN_BACK = 'AUTH_SIGNIN_BACK'


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