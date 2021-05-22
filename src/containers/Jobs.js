import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { CircleToBlockLoading } from 'react-loadingg';
// import Job from '../components/Job';
import { fetchJobsInit, fetchJobsSuccess, fetchJobsFailure }
  from '../actions/index';
import { jobsCall } from '../utils/apiCalls';
import CandidateJobs from './CandidateJobs';
import RecruiterJobs from './RecruiterJobs';
import '../styles/Jobs.css';

const Jobs = ({
  fetchInit, fetchSuccess, fetchFail, isLoading, isError, user, jobs, isLoggedIn,
}) => {
  const [currentUser, setCurrentUser] = useState({ user });
  const [loginState, setLoginState] = useState(isLoggedIn);
  useEffect(() => {
    // jobsCall(fetchInit, fetchSuccess, fetchFail);
    setCurrentUser(currentUser);
    jobsCall(fetchInit, fetchSuccess, fetchFail);
  }, [currentUser]);

  useEffect(() => { setLoginState(isLoggedIn); }, [isLoggedIn]);

  return (
    <div>
      {/* {console.log('login state passed', loginState)} */}
      {console.log(jobs)}
      {isError && <div>Couldn&apos;t fetch the data now, please try again later</div>}
      { isLoading
        ? (<div><CircleToBlockLoading size="small" color="rgb(92, 92, 241)" /></div>)
        : (
          <>
            {(currentUser.user.user_type === 'Candidate')
              ? (
                <CandidateJobs
                  jobs={jobs}
                  user={currentUser}
                  isLoggedIn={loginState}
                />
              )
              : (
                <RecruiterJobs
                  jobs={jobs}
                  jobsCall={jobsCall}
                  fetchInit={fetchInit}
                  fetchSuccess={fetchSuccess}
                  fetchFail={fetchFail}
                  user={currentUser}
                />
              )}
          </>

        )}
    </div>
  );
};

// Jobs.propTypes = {
//   user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
// };

// Jobs.defaultProps = {
//   user: {},
// };

// export default Jobs;
Jobs.propTypes = {
  fetchInit: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFail: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Jobs.defaultProps = {
  isLoading: false,
  isError: false,
  jobs: [],
  user: {},
  isLoggedIn: false,
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
