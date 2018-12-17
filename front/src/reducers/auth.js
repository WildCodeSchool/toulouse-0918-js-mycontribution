import { AUTH_SIGNIN, AUTH_SIGNUP, AUTH_SIGNUP_CLOSE, AUTH_SIGNIN_BACK } from '../actions'

const initialState = {
  isSignInOpen: false,
  isSignUpOpen: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      return { ...state, isSignInOpen: !state.isSignInOpen }
    case AUTH_SIGNUP:
      return { isSignUpOpen: !state.isSignUpOpen, isSignInOpen: !state.isSignInOpen }
    case AUTH_SIGNUP_CLOSE:
      return { ...state, isSignUpOpen: !state.isSignUpOpen }
    case AUTH_SIGNIN_BACK:
      return { isSignUpOpen: !state.isSignUpOpen, isSignInOpen: !state.isSignInOpen }
    default:
      return state
  }
}

export default reducer