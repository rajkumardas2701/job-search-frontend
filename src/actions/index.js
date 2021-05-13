export const AUTH_INIT = 'AUTH_INIT';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_SIGNUP_FAIL = 'AUTH_SIGNUP_FAIL';
export const AUTH_SIGNIN_FAIL = 'AUTH_SIGNIN_FAIL';

export const authInit = () => ({
  type: AUTH_INIT,
});

export const authSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const authSignupFailure = (error) => ({
  type: AUTH_SIGNUP_FAIL,
});

export const authSigninFailure = (error) => ({
  type: AUTH_SIGNIN_FAIL
});
