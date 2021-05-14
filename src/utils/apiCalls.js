import axios from 'axios';

const authCall = (user, initialize, success, failure) => {
  initialize();
  axios.post('http://localhost:3001/api/v1/signup', { user }, { withCredentials: true })
    .then((response) => {
      if (response.data.status === 'created') {
        success();
      // history.push('/');
      } else {
        failure(response.data.errors);
      }
    })
    .catch((error) => failure(error.response.data.message));
};

export default authCall;
