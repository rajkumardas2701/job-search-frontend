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
    const result = await axios.get('http://localhost:3001/api/v1/jobs');
    success(result.data.jobs);
  } catch (error) {
    failure(error);
  }
};

// const isLoggedIn = async () => {
//   console.log('inside apicalls');
//   let response;
//   try {
//     response = await axios.get('http://localhost:3001/api/v1/logged_in', { withCredentials: true });
//   } catch (error) {
//     response = error;
//   }
//   return response;
// };

export { authCall, jobsCall };
