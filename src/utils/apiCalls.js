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

const jobCall = async (initialize, success, failure, id) => {
  initialize();
  try {
    const result = await axios.get(`http://localhost:3001/api/v1/jobs/${id}`, { withCredentials: true });
    console.log(result);
    if (result.data.job) {
      success(result.data.job);
    } else {
      failure(result.data.errors);
    }
  } catch (error) {
    failure(error);
  }
};

export { authCall, jobsCall, jobCall };
