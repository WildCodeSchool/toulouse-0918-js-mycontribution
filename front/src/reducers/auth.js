import {
  AUTH_SIGNIN, AUTH_SIGNUP, AUTH_SIGNUP_CLOSE, AUTH_SIGNIN_BACK, MDP_UP, MDP_DOWN, USER_AUTH, USER_OUT
} from '../actions';

const initialState = {
  isSignInOpen: false,
  isSignUpOpen: false,
  isMDPOpen: false,
  user: null,
  slice: 3
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
      return { ...state, user: action.user, slice: state.slice + 3 };
    case USER_OUT:
      return { ...state, user: null, slice: 3 };
    case MDP_UP:
      return { ...state, isMDPOpen: !state.isMDPOpen, isSignInOpen: !state.isSignInOpen };
    case MDP_DOWN:
      return { ...state, isMDPOpen: !state.isMDPOpen };
    default:
      return state;
  }
};

export default reducer;
