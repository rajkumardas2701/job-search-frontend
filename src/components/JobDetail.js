// import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
// { useState, useEffect }
import { useLocation, useParams } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CircleToBlockLoading } from 'react-loadingg';
import NavBar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
// import Home from '../layouts/Home';
import { jobCall } from '../utils/apiCalls';
import { fetchJobInit, fetchJobSuccess, fetchJobFailure } from '../actions/index';

const JobDetail = ({
  fetchInit, fetchSuccess, fetchFail, isLoading, isError, job,
}) => {
  const location = useLocation();
  const { user, loginState } = location.state;
  const { id } = useParams();
  useEffect(() => {
    jobCall(fetchInit, fetchSuccess, fetchFail, id);
  }, []);

  return (
    <>
      <NavBar
        isLoggedIn={loginState}
        user={user}
      />
      {isError && <div>Couldn&apos;t load the data</div>}
      {
        isLoading ? (<div><CircleToBlockLoading size="small" color="rgb(92, 92, 241)" /></div>)
          : (
            <ul>
              <li>{job.location}</li>
              <li>{job.salary}</li>
              <li>{job.role}</li>
              <li>{job.skills}</li>
            </ul>
          )
      }
      <Footer />
    </>
  );
};

JobDetail.propTypes = {
  fetchInit: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFail: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  job: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

JobDetail.defaultProps = {
  isLoading: false,
  isError: false,
};

const mapStateToProps = (state) => ({
  isLoading: state.jobData.isLoading,
  isError: state.jobData.isError,
  job: state.jobData.job,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInit: () => dispatch(fetchJobInit()),
  fetchSuccess: (data) => dispatch(fetchJobSuccess(data)),
  fetchFail: () => dispatch(fetchJobFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
