export const AUTH_INIT = 'AUTH_INIT';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_SIGNUP_FAIL = 'AUTH_SIGNUP_FAIL';
export const AUTH_SIGNIN_FAIL = 'AUTH_SIGNIN_FAIL';

export const FETCH_JOBS_INIT = 'FETCH_JOBS_INIT';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAIL = 'FETCH_JOBS_FAIL';

export const authInit = () => ({
  type: AUTH_INIT,
});

export const authSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const authSignupFailure = (errors) => ({
  type: AUTH_SIGNUP_FAIL,
  payload: errors,
});

export const authSigninFailure = (error) => ({
  type: AUTH_SIGNIN_FAIL,
  payload: error,
});

export const fetchJobsInit = () => ({
  type: FETCH_JOBS_INIT,
});

export const fetchJobsSuccess = () => ({
  type: FETCH_JOBS_SUCCESS,
});

export const fetchJobsFailure = (errors) => ({
  type: FETCH_JOBS_FAIL,
  payload: errors,
});
