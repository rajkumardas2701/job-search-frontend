import '../styles/CandidateJobs.css';
import '../styles/RecruiterJobs.css';
// import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { CircleToBlockLoading } from 'react-loadingg';
import { postJobInit, postJobSuccess, postJobfailure } from '../actions/index';
import AddJob from '../components/AddJob';
import Job from '../components/Job';

const RecruiterJobs = ({
  postInit, postSuccess, postFailure, isLoading, errors, job, jobs, jobsCall,
  fetchInit,
  fetchSuccess,
  fetchFail,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [showJobs, setShowJobs] = useState(jobs);
  useEffect(() => { setShowJobs(showJobs); }, [showJobs]);
  // const history = useHistory();
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <h3 className="view">Recruiter&apos;s View</h3>
      {console.log('from recruiter container', jobs)}
      <div className="jobs-container">
        {
          (jobs && jobs.length)
            ? (jobs.map((job) => <Job job={job} key={job.id} />))
            : (<div>You didn&apos;t add any job yet. Click on Add Job to get started</div>)
        }
      </div>
      {!showForm && (
      <button
        type="button"
        className="add-job-btn"
        onClick={handleClick}
      >
        Add Job
      </button>
      )}
      {showForm && (
      <AddJob
        handleForm={(showForm) => setShowForm(showForm)}
        postInit={(isLoading) => postInit(isLoading)}
        postSuccess={(job) => postSuccess(job)}
        postFailure={(errors) => postFailure(errors)}
        jobsCall={jobsCall}
        fetchInit={fetchInit}
        fetchSuccess={fetchSuccess}
        fetchFail={fetchFail}
      />
      )}
      {console.log(job)}
      {job.length > 0 && <div>Job has been added</div>}
      {errors && console.log(errors)}
      {isLoading && <div>Loading Job</div>}

    </div>
  );
};

RecruiterJobs.propTypes = {
  postInit: PropTypes.func.isRequired,
  postSuccess: PropTypes.func.isRequired,
  postFailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  job: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  jobsCall: PropTypes.func,
  fetchInit: PropTypes.func,
  fetchSuccess: PropTypes.func,
  fetchFail: PropTypes.func,
};

RecruiterJobs.defaultProps = {
  isLoading: false,
  errors: [],
  job: [],
  jobs: [],
  jobsCall: () => {},
  fetchInit: () => {},
  fetchSuccess: () => {},
  fetchFail: () => {},
};

const mapStateToProps = (state) => ({
  isLoading: state.postJobData.isLoading,
  errors: state.postJobData.errors,
  job: state.postJobData.job,
});

const mapDispatchToProps = (dispatch) => ({
  postInit: (isLoading) => dispatch(postJobInit(isLoading)),
  postSuccess: (job) => dispatch(postJobSuccess(job)),
  postFailure: (errors) => dispatch(postJobfailure(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterJobs);
