import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { CircleToBlockLoading } from 'react-loadingg';
// import Job from '../components/Job';
// import { fetchJobsInit, fetchJobsSuccess, fetchJobsFailure }
// from '../actions/index';
// import { jobsCall } from '../utils/apiCalls';
import CandidateJobs from './CandidateJobs';
import RecruiterJobs from './RecruiterJobs';
import '../styles/Jobs.css';

const Jobs = ({ user }) => {
  const [currentUser, setCurrentUser] = useState({ user });
  useEffect(() => {
    // jobsCall(fetchInit, fetchSuccess, fetchFail);
    setCurrentUser(currentUser);
  }, [currentUser]);

  return (
    <div>
      {/* {console.log(currentUser.user.user_type)} */}
      {
       (currentUser.user.user_type === 'Candidate')
         ? (<CandidateJobs />)
         : (<RecruiterJobs />)
     }
    </div>
  );
};

Jobs.propTypes = {
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Jobs.defaultProps = {
  user: {},
};

export default Jobs;
// Jobs.propTypes = {
//   fetchInit: PropTypes.func.isRequired,
//   fetchSuccess: PropTypes.func.isRequired,
//   fetchFail: PropTypes.func.isRequired,
//   isLoading: PropTypes.bool,
//   isError: PropTypes.bool,
//   jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
// };

// Jobs.defaultProps = {
//   isLoading: false,
//   isError: false,
//   jobs: [],
// };

// const mapStateToProps = (state) => ({
//   isLoading: state.jobsData.isLoading,
//   isError: state.jobsData.isError,
//   jobs: state.jobsData.jobs,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchInit: () => dispatch(fetchJobsInit()),
//   fetchSuccess: (data) => dispatch(fetchJobsSuccess(data)),
//   fetchFail: () => dispatch(fetchJobsFailure()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
