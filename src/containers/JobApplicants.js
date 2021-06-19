import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { CircleToBlockLoading } from 'react-loadingg';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/Navbar';
import { fetchAppsCall, deleteAppsCall } from '../utils/apiCalls';
import Applicant from '../components/Applicant';
import { fetchAppsInit, fetchAppsSuccess, fetchAppsFailure } from '../actions/index';
import '../styles/JobApplicants.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const JobApplicants = ({
  appsInit, appsSuccess, appsFail, isLoading, isError, apps,
}) => {
  const history = useHistory();
  const location = useLocation();
  if (location.state === undefined) {
    history.push('/');
  }
  const { user, loginState, job } = location.state;
  const handleClick = () => {
    fetchAppsCall(appsInit, appsSuccess, appsFail, job.id);
  };
  const handleDelete = () => {
    // eslint-disable-next-line
    const confirmBox = window.confirm('Are you sure you want to delete this Job?');
    if (confirmBox === true) {
      deleteAppsCall(appsInit, appsFail, job.id, history);
    }
  };
  useEffect(() => {
    fetchAppsCall(appsInit, appsSuccess, appsFail, job.id);
  }, []);

  return (
    <>
      <NavBar
        isLoggedIn={loginState}
        user={user}
      />
      {isError && <div className="no-jobs-msg">We have encountered error</div>}
      <div className="job-section-2">
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
          <p className="job-label">Skills:</p>
          <p className="job-value">{job.skills}</p>
        </div>
        <div className="job-btns">
          <button
            type="button"
            onClick={handleClick}
            className="job-apply-btn"
          >
            Refresh list
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="job-delete-btn"
          >
            Delete Job
          </button>
        </div>
      </div>
      {isLoading ? (<div><CircleToBlockLoading size="small" color="rgb(92, 92, 241)" /></div>)
        : (
          <div className="applicants-list">
            { (apps && apps.length)
              ? (
                <Carousel showThumbs={false} className="carousel-container-applicant">
                  {
              apps.map((app) => (
                <Applicant
                  key={app.id}
                  app={app}
                  job={job}
                />
              ))
            }
                </Carousel>
              ) : (
                <div className="no-jobs-msg-applicant-list">
                  There is no application for this role.
                  Click on Refresh list to check for an update, if any.
                </div>
              )}
          </div>
        )}
      <Footer />
    </>
  );
};

JobApplicants.propTypes = {
  appsInit: PropTypes.func.isRequired,
  appsSuccess: PropTypes.func.isRequired,
  appsFail: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  apps: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

JobApplicants.defaultProps = {
  isLoading: false,
  isError: false,
  apps: [],
};

const mapStateToProps = (state) => ({
  isLoading: state.appsData.isLoading,
  isError: state.appsData.isError,
  apps: state.appsData.apps,
});

const mapDispatchToProps = (dispatch) => ({
  appsInit: () => dispatch(fetchAppsInit()),
  appsSuccess: (apps) => dispatch(fetchAppsSuccess(apps)),
  appsFail: () => dispatch(fetchAppsFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobApplicants);
