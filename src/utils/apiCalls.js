import axios from 'axios';

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
  axios.post(`http://localhost:3001/api/v1/${query}`, { user }, { withCredentials: true })
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
    const result = await axios.get('http://localhost:3001/api/v1/jobs', { withCredentials: true });
    if (result.data.jobs) {
      success(result.data.jobs);
    } else {
      failure(result.data.errors);
    }
  } catch (error) {
    failure(error);
  }
};

const applyJob = async (initialize, success, failure, app, history) => {
  initialize();
  try {
    const result = await axios.post('http://localhost:3001/api/v1/apps', { app }, { withCredentials: true });
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
      .get(`http://localhost:3001/api/v1/apps/${id}`, { withCredentials: true });
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
      .delete(`http://localhost:3001/api/v1/jobs/${id}`, { withCredentials: true });
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
    .post('http://localhost:3001/api/v1/jobs', { job }, { withCredentials: true })
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
    .get('http://localhost:3001/api/v1/logged_in', { withCredentials: true })
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
  axios.delete(`http://localhost:3001/api/v1/sessions/${userState.id}`, { withCredentials: true })
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
