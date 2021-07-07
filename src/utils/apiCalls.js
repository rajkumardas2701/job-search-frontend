import axios from 'axios';
// import baseURL from '../constants/apis';

const authCall = (authType, user, initialize, success, failure, history) => {
  let query;
  if (authType === 'signup') {
    query = 'users';
  } else if (authType === 'signin') {
    query = 'sessions';
  }
  initialize();
  axios.post(`http://127.0.0.1:3001/api/v1/${query}`, { user }, { withCredentials: true })
    .then((response) => {
      if ((response.data.status === 'created') || (response.data.logged_in)) {
        success();
        localStorage.setItem('loggedInState', JSON.stringify({
          logged_in: true,
          user: response.data.user,
          token: response.data.token,
        }));
        history.push('/');
      } else {
        localStorage.setItem('loggedInState', JSON.stringify({
          logged_in: false,
          user: {},
          token: '',
        }));
        failure(response.data.message);
        history.push('/');
      }
    })
    .catch(() => {
      if (authType === 'signup') {
        failure('Email is already taken');
      } else {
        failure('Email or password incorrect');
      }
    });
};

const jobsCall = async (initialize, success, failure, history) => {
  initialize();
  try {
    const result = await axios.get('http://127.0.0.1:3001/api/v1/jobs', {
      headers:
    { Authorization: `${JSON.parse(localStorage.getItem('loggedInState')).token}` },
    },
    { withCredentials: true });
    if (result.data.jobs) {
      success(result.data.jobs);
    } else {
      failure(result.data.errors);
    }
  } catch (error) {
    localStorage.setItem('loggedInState', JSON.stringify({
      logged_in: false,
      user: {},
      token: '',
    }));
    failure(error);
    setTimeout(() => {
      history.push('/');
    }, 1000);
  }
};

const applyJob = async (initialize, success, failure, app, history) => {
  initialize();
  try {
    const result = await axios.post('http://127.0.0.1:3001/api/v1/apps', { app },
      {
        headers:
    { Authorization: `${JSON.parse(localStorage.getItem('loggedInState')).token}` },
      },
      { withCredentials: true });
    if (result.data.status === 200) {
      success(result.data.message);
      history.push('/');
    } else {
      failure(result.data.message);
      history.push('/');
    }
  } catch (error) {
    failure(error);
    localStorage.setItem('loggedInState', JSON.stringify({
      logged_in: false,
      user: {},
      token: '',
    }));
    history.push('/');
  }
};

const fetchAppsCall = async (initialize, success, failure, id, history) => {
  initialize();
  try {
    const result = await axios
      .get(`http://127.0.0.1:3001/api/v1/apps/${id}`,
        {
          headers:
    { Authorization: `${JSON.parse(localStorage.getItem('loggedInState')).token}` },
        },
        { withCredentials: true });
    if (result.data.status === 200) {
      success(result.data.applicants);
    } else {
      failure(result.data.message);
    }
  } catch (error) {
    failure(error);
    localStorage.setItem('loggedInState', JSON.stringify({
      logged_in: false,
      user: {},
      token: '',
    }));
    history.push('/');
  }
};

const deleteAppsCall = async (initialize, failure, id, history) => {
  initialize();
  try {
    const result = await axios
      .delete(`http://127.0.0.1:3001/api/v1/jobs/${id}`,
        {
          headers:
    { Authorization: `${JSON.parse(localStorage.getItem('loggedInState')).token}` },
        },
        { withCredentials: true });
    if (result.data.status === 200) {
      history.push('/');
    } else {
      failure(result.data.message);
    }
  } catch (error) {
    failure(error);
    localStorage.setItem('loggedInState', JSON.stringify({
      logged_in: false,
      user: {},
      token: '',
    }));
    history.push('/');
  }
};

const postJob = (postInit, postSuccess, postFailure, jobsCall,
  fetchInit,
  fetchSuccess,
  fetchFail, job, history) => {
  postInit();
  axios
    .post('http://127.0.0.1:3001/api/v1/jobs', { job },
      {
        headers:
  { Authorization: `${JSON.parse(localStorage.getItem('loggedInState')).token}` },
      },
      { withCredentials: true })
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
      localStorage.setItem('loggedInState', JSON.stringify({
        logged_in: false,
        user: {},
        token: '',
      }));
      history.push('/');
    });
};

export {
  authCall, jobsCall, applyJob, fetchAppsCall, deleteAppsCall, postJob,
};
