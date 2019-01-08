import {
  AUTH_SIGNIN, AUTH_SIGNUP, AUTH_SIGNUP_CLOSE, AUTH_SIGNIN_BACK, USER_AUTH, USER_OUT
} from '../actions';

const initialState = {
  isSignInOpen: false,
  isSignUpOpen: false,
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      return { ...state, isSignInOpen: !state.isSignInOpen };
    case AUTH_SIGNUP:
      return { isSignUpOpen: !state.isSignUpOpen, isSignInOpen: !state.isSignInOpen };
    case AUTH_SIGNUP_CLOSE:
      return { ...state, isSignUpOpen: !state.isSignUpOpen };
    case AUTH_SIGNIN_BACK:
      return { isSignUpOpen: !state.isSignUpOpen, isSignInOpen: !state.isSignInOpen };
    case USER_AUTH:
      return { ...state, user: action.user };
    case USER_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default reducer;
