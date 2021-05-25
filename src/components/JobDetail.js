import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CircleToBlockLoading } from 'react-loadingg';
import NavBar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { applyJob } from '../utils/apiCalls';
import { applyJobInit, applyJobSuccess, applyJobFailure } from '../actions/index';
import '../styles/JobDetail.css';

const JobDetail = ({
  applyInit, applySuccess, applyFail, isLoading, isError, jobRes,
}) => {
  const history = useHistory();
  const location = useLocation();
  const { user, loginState, job } = location.state;
  const handleClick = () => {
    const data = {
      user_id: user.id,
      job_id: job.id,
    };
    applyJob(applyInit, applySuccess, applyFail, data, history);
  };

  return (
    <>
      <NavBar
        isLoggedIn={loginState}
        user={user}
      />
      {isError && (
      <div className="no-jobs-msg">
        Couldn&apos;t apply for
        {job.role}
        {' '}
        job
      </div>
      )}
      <div className="job-section-1">
        <div className="job-details">
          <p className="job-label">
            Role:
          </p>
          <p className="job-value">{job.role}</p>
        </div>
        <div className="job-details">
          <p className="job-label">Location:</p>
          <p className="job-value">{job.location}</p>
        </div>
        <div className="job-details">
          <p className="job-label">Max. salary:</p>
          <p className="job-value">
            ₹
            {' '}
            {job.salary}
            {' '}
            L/A
          </p>
        </div>
        <div className="job-details">
          <p className="job-label">Skills required:</p>
          <p className="job-value">{job.skills}</p>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="job-apply-btn"
        >
          Apply for this Job
        </button>
      </div>
      {
        isLoading ? (<div><CircleToBlockLoading size="small" color="rgb(92, 92, 241)" /></div>)
          : (
            <div>{jobRes}</div>
          )
      }
      <Footer />
    </>
  );
};

JobDetail.propTypes = {
  applyInit: PropTypes.func.isRequired,
  applySuccess: PropTypes.func.isRequired,
  applyFail: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  jobRes: PropTypes.string,
};

JobDetail.defaultProps = {
  isLoading: false,
  isError: false,
  jobRes: '',
};

const mapStateToProps = (state) => ({
  isLoading: state.jobData.isLoading,
  isError: state.jobData.isError,
  jobRes: state.jobData.job,
});

const mapDispatchToProps = (dispatch) => ({
  applyInit: () => dispatch(applyJobInit()),
  applySuccess: (jobRes) => dispatch(applyJobSuccess(jobRes)),
  applyFail: (jobRes) => dispatch(applyJobFailure(jobRes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
