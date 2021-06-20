import axios from 'axios';
import baseURL from '../constants/apis';

const authCall = (authType, user, initialize, success, failure, history) => {
  let query;
  if (authType === 'signup') {
    query = 'signup';
  } else if (authType === 'signin') {
    query = 'login';
  } else {
    query = 'logout';
  }
  initialize();
  axios.post(`${baseURL}${query}`, { user }, { withCredentials: true })
    .then((response) => {
      if ((response.data.status === 'created') || (response.data.logged_in)) {
        success();
        history.push('/');
      } else if (response.data.logged_out) {
        history.push('/');
      } else {
        failure(response.data.errors);
      }
    })
    .catch((error) => {
      failure(error.message);
    });
};

const jobsCall = async (initialize, success, failure) => {
  initialize();
  try {
    const result = await axios.get(`${baseURL}jobs`, { withCredentials: true });
    if (result.data.jobs) {
      success(result.data.jobs);
    } else {
      // console.log('error from jobsCall error', result.data.errors);
      failure(result.data.errors);
    }
  } catch (error) {
    // console.log('error from jobsCall catch', error);
    failure(error);
  }
};

const applyJob = async (initialize, success, failure, app, history) => {
  initialize();
  try {
    const result = await axios.post(`${baseURL}apps`, { app }, { withCredentials: true });
    if (result.data.status === 200) {
      success(result.data.message);
      history.push('/');
    } else {
      failure(result.data.message);
      history.push('/');
    }
  } catch (error) {
    failure(error);
    history.push('/');
  }
};

const fetchAppsCall = async (initialize, success, failure, id) => {
  initialize();
  try {
    const result = await axios
      .get(`${baseURL}apps/${id}`, { withCredentials: true });
    if (result.data.status === 200) {
      success(result.data.applicants);
    } else {
      failure(result.data.message);
    }
  } catch (error) {
    failure(error);
  }
};

const deleteAppsCall = async (initialize, failure, id, history) => {
  initialize();
  try {
    const result = await axios
      .delete(`${baseURL}jobs/${id}`, { withCredentials: true });
    if (result.data.status === 200) {
      history.push('/');
    } else {
      failure(result.data.message);
    }
  } catch (error) {
    failure(error);
  }
};

const postJob = (postInit, postSuccess, postFailure, jobsCall,
  fetchInit,
  fetchSuccess,
  fetchFail, job) => {
  postInit(true);
  axios
    .post(`${baseURL}jobs`, { job }, { withCredentials: true })
    .then((response) => {
      if (response.data.status === 'created') {
        postSuccess(response.data.job);
        jobsCall(fetchInit, fetchSuccess, fetchFail);
      } else {
        postFailure(response.data.errors);
      }
    })
    .catch((error) => {
      postFailure(error);
    });
};

const isLoggedIn = (setLoggedIn, loggedIn, history) => {
  axios
    .get(`${baseURL}logged_in`, { withCredentials: true })
    .then((response) => {
      if (response.data.logged_in && !loggedIn.logged_in) {
        setLoggedIn({
          logged_in: true,
          user: response.data.user,
        });
      } else if (!response.data.logged_in && loggedIn.logged_in) {
        setLoggedIn({
          logged_in: false,
          user: {},
        });
        history.push('/home');
      }
    })
    .catch((error) => error);
};

const logoutCall = (userState, loginState, handleSignOut) => {
  axios.delete(`${baseURL}sessions/${userState.id}`, { withCredentials: true })
    .then(() => {
      handleSignOut({
        logged_in: false,
        user: {},
      });
    })
    .catch((error) => error);
};

export {
  authCall, jobsCall, applyJob, fetchAppsCall, deleteAppsCall, postJob, isLoggedIn, logoutCall,
};
