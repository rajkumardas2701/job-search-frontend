import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { CircleToBlockLoading } from 'react-loadingg';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Job from '../components/Job';
import { fetchJobsInit, fetchJobsSuccess, fetchJobsFailure } from '../actions/index';
import { jobsCall } from '../utils/apiCalls';
import NavBar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Jobs = ({
  fetchInit, fetchSuccess, fetchFail, isLoading, isError, jobs,
}) => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState({
    logged_in: false,
    user: {},
  });

  const isLoggedIn = () => {
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
          history.push('/');
        }
      })
      .catch((error) => error);
    jobsCall(fetchInit, fetchSuccess, fetchFail);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <div>
      <NavBar />
      {isError && <div>Couldn&apos;t fetch the data now, please try again later</div>}
      {isLoading ? (<div><CircleToBlockLoading size="small" color="rgb(92, 92, 241)" /></div>)
        : (
          <div>
            {
          (jobs && jobs.length) ? (jobs.map((job) => <Job job={job} key={job.id} />))
            : 'fetching Data'
          }
          </div>
        )}
      <Footer />
    </div>
  );
};
Jobs.propTypes = {
  fetchInit: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFail: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Jobs.defaultProps = {
  isLoading: false,
  isError: false,
  jobs: [],
};

const mapStateToProps = (state) => ({
  isLoading: state.jobsData.isLoading,
  isError: state.jobsData.isError,
  jobs: state.jobsData.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInit: () => dispatch(fetchJobsInit()),
  fetchSuccess: (data) => dispatch(fetchJobsSuccess(data)),
  fetchFail: () => dispatch(fetchJobsFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
