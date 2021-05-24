import React from 'react';
// , { useEffect }
// { useState, useEffect }
import { useHistory, useLocation } from 'react-router';
// , useParams
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CircleToBlockLoading } from 'react-loadingg';
import NavBar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
// import Home from '../layouts/Home';
import { applyJob } from '../utils/apiCalls';
import { applyJobInit, applyJobSuccess, applyJobFailure } from '../actions/index';

const JobDetail = ({
  applyInit, applySuccess, applyFail, isLoading, isError, jobRes,
}) => {
  const history = useHistory();
  const location = useLocation();
  const { user, loginState, job } = location.state;
  // const { id } = useParams();
  // useEffect(() => {
  //   jobCall(fetchInit, fetchSuccess, fetchFail, id);
  // }, []);

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
      <div>
        Couldn&apos;t apply for
        {job.role}
        {' '}
        job
      </div>
      )}
      {console.log(job)}
      <ul>
        <li>{job.location}</li>
        <li>{job.salary}</li>
        <li>{job.role}</li>
        <li>{job.skills}</li>
        <button type="button" onClick={handleClick}>Apply for Job</button>
      </ul>
      {console.log(jobRes)}
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
