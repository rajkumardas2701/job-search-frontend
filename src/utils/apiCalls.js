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
  // console.log(app);
  initialize();
  try {
    const result = await axios.post('http://localhost:3001/api/v1/apps', { app }, { withCredentials: true });
    console.log(result);
    if (result.data.status === 200) {
      success(result.data.message);
      setTimeout(() => {
        history.push('/');
      }, 5000);
    } else {
      failure(result.data.message);
      setTimeout(() => {
        history.push('/');
      }, 5000);
    }
  } catch (error) {
    failure(error);
    history.push('/');
  }
};

const fetchAppsCall = async (initialize, success, failure, appId, history) => {
  initialize();
  try {
    const result = await axios
      .get('http://localhost:3001/api/v1/apps', { appId }, { withCredentials: true });
    console.log(result);
    // if (result.data.status === 200) {
    //   success(result.data.message);
    //   setTimeout(() => {
    //     history.push('/');
    //   }, 5000);
    // } else {
    //   failure(result.data.message);
    //   setTimeout(() => {
    //     history.push('/');
    //   }, 5000);
    // }
  } catch (error) {
    failure(error);
    history.push('/');
  }
};

export {
  authCall, jobsCall, applyJob, fetchAppsCall,
};
