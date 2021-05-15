import {
  AUTH_INIT, AUTH_SUCCESS, AUTH_SIGNUP_FAIL, AUTH_SIGNIN_FAIL,
} from '../actions/index';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_INIT:
      return { ...state, isLoading: true };
    case AUTH_SUCCESS:
      return {
        ...state, isLoading: false,
      };
    case AUTH_SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: {
          signupErrors: [...state.errors.signupErrors, action.payload],
          signinErrors: [],
        },
      };
    case AUTH_SIGNIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: {
          signinErrors: [...state.errors.signinErrors, action.payload],
          signupErrors: [],
        },
      };
    default:
      return state;
  }
};

export default authReducer;
