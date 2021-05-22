import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { CircleToBlockLoading } from 'react-loadingg';
import Job from '../components/Job';
// import { fetchJobsInit, fetchJobsSuccess, fetchJobsFailure } from '../actions/index';
// import { jobsCall } from '../utils/apiCalls';
import '../styles/CandidateJobs.css';

const CandidateJobs = ({ jobs, user, isLoggedIn }) => {
  console.log(jobs);
  const [loginState, setLoginState] = useState(isLoggedIn);

  useEffect(() => {
    // jobsCall(fetchInit, fetchSuccess, fetchFail);
  }, []);
  useEffect(() => { setLoginState(isLoggedIn); }, [isLoggedIn]);

  return (
    <div>
      <h3 className="view">Candidate&apos;s View</h3>
      {/* {isError && <div>Couldn&apos;t fetch the data now, please try again later</div>} */}
      <div className="jobs-container">
        {
          (jobs && jobs.length)
            ? (jobs.map((job) => (
              <Job
                job={job}
                key={job.id}
                user={user}
                isLoggedIn={loginState}
              />
            )))
            : (<div>No jobs to apply. You will see them when a recuiter post them</div>)
        }
      </div>

    </div>
  );
};
CandidateJobs.propTypes = {
  // fetchInit: PropTypes.func.isRequired,
  // fetchSuccess: PropTypes.func.isRequired,
  // fetchFail: PropTypes.func.isRequired,
  // isLoading: PropTypes.bool,
  // isError: PropTypes.bool,
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  isLoggedIn: PropTypes.bool,
};

CandidateJobs.defaultProps = {
  // isLoading: false,
  // isError: false,
  jobs: [],
  // user: {},
  isLoggedIn: false,
};

export default CandidateJobs;
