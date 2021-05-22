export const AUTH_INIT = 'AUTH_INIT';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_SIGNUP_FAIL = 'AUTH_SIGNUP_FAIL';
export const AUTH_SIGNIN_FAIL = 'AUTH_SIGNIN_FAIL';

export const FETCH_JOBS_INIT = 'FETCH_JOBS_INIT';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAIL = 'FETCH_JOBS_FAIL';

export const FETCH_JOB_INIT = 'FETCH_JOB_INIT';
export const FETCH_JOB_SUCCESS = 'FETCH_JOB_SUCCESS';
export const FETCH_JOB_FAIL = 'FETCH_JOB_FAIL';

export const POST_JOBS_INIT = 'POST_JOBS_INIT';
export const POST_JOBS_SUCCESS = 'POST_JOBS_SUCCESS';
export const POST_JOBS_FAIL = 'POST_JOBS_FAIL';

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

export const fetchJobsSuccess = (data) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: data,
});

export const fetchJobsFailure = () => ({
  type: FETCH_JOBS_FAIL,
});

export const fetchJobInit = () => ({
  type: FETCH_JOB_INIT,
});

export const fetchJobSuccess = (data) => ({
  type: FETCH_JOB_SUCCESS,
  payload: data,
});

export const fetchJobFailure = () => ({
  type: FETCH_JOB_FAIL,
});

export const postJobInit = (data) => ({
  type: POST_JOBS_INIT,
  payload: data,
});

export const postJobSuccess = (data) => ({
  type: POST_JOBS_SUCCESS,
  payload: data,
});

export const postJobfailure = (errors) => ({
  type: POST_JOBS_FAIL,
  payload: errors,
});
