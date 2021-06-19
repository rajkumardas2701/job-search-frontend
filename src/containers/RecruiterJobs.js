import '../styles/RecruiterJobs.css';
// import '../styles/CandidateJobs.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import { postJobInit, postJobSuccess, postJobfailure } from '../actions/index';
import AddJob from '../components/AddJob';
import Job from '../components/Job';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const RecruiterJobs = ({
  postInit, postSuccess, postFailure, isLoading, errors, job, jobs, jobsCall,
  fetchInit,
  fetchSuccess,
  fetchFail,
  user,
  isLoggedIn,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [showJobs, setShowJobs] = useState(jobs);
  const [loginState, setLoginState] = useState(isLoggedIn);

  useEffect(() => { setLoginState(isLoggedIn); }, [isLoggedIn]);
  useEffect(() => { setShowJobs(showJobs); }, [showJobs]);
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="candidate-jobs-container">
      <div className="jobs-container-recruiter">
        {
          (jobs && jobs.length)
            ? (
              <Carousel showThumbs={false} className="carousel-container-recruiter">
                {
              jobs.map((job) => (
                <Job
                  job={job}
                  key={job.id}
                  user={user}
                  isLoggedIn={loginState}
                />
              ))
          }
              </Carousel>
            )
            : (
              <div className="no-jobs-msg-recruiter">
                You didn&apos;t add any job yet. Click on
                {' '}
                <b>Add Job</b>
                {' '}
                to get started
              </div>
            )
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
      {job.length > 0 && <div>Job has been added</div>}
      {errors && <div>{errors}</div>}
      {isLoading && <div>Loading Job</div>}

    </div>
  );
};

RecruiterJobs.propTypes = {
  postInit: PropTypes.func.isRequired,
  postSuccess: PropTypes.func.isRequired,
  postFailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  job: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  jobsCall: PropTypes.func,
  fetchInit: PropTypes.func,
  fetchSuccess: PropTypes.func,
  fetchFail: PropTypes.func,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

RecruiterJobs.defaultProps = {
  isLoading: false,
  errors: [],
  job: [],
  jobs: [],
  isLoggedIn: false,
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
