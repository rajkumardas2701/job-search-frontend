import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { CircleToBlockLoading } from 'react-loadingg';
import Job from '../components/Job';
// import { fetchJobsInit, fetchJobsSuccess, fetchJobsFailure } from '../actions/index';
// import { jobsCall } from '../utils/apiCalls';
import '../styles/CandidateJobs.css';

const CandidateJobs = ({ jobs }) => {
  console.log(jobs);
  useEffect(() => {
    // jobsCall(fetchInit, fetchSuccess, fetchFail);
  }, []);

  return (
    <div>
      <h3 className="view">Candidate&apos;s View</h3>
      {/* {isError && <div>Couldn&apos;t fetch the data now, please try again later</div>} */}
      <div className="jobs-container">
        {
          (jobs && jobs.length) ? (jobs.map((job) => <Job job={job} key={job.id} />))
            : (<div><CircleToBlockLoading size="small" color="rgb(92, 92, 241)" /></div>)
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
};

CandidateJobs.defaultProps = {
  // isLoading: false,
  // isError: false,
  jobs: [],
};

export default CandidateJobs;
