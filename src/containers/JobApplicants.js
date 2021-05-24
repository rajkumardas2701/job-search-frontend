import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { CircleToBlockLoading } from 'react-loadingg';
import { connect } from 'react-redux';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/Navbar';
import { fetchAppsCall } from '../utils/apiCalls';
import Applicant from '../components/Applicant';
import { fetchAppsInit, fetchAppsSuccess, fetchAppsFailure } from '../actions/index';

const JobApplicants = ({
  appsInit, appsSuccess, appsFail, isLoading, isError, apps,
}) => {
  const history = useHistory();
  const location = useLocation();
  const { user, loginState, job } = location.state;
  if (location.state === undefined) {
    history.push('/');
  }
  const handleClick = () => {
    fetchAppsCall(appsInit, appsSuccess, appsFail, job.id);
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
      {isError && <div>We have encountered error</div>}
      <ul>
        <li>{job.location}</li>
        <li>{job.salary}</li>
        <li>{job.role}</li>
        <li>{job.skills}</li>
        <button type="button" onClick={handleClick}>Check Recently Added</button>
      </ul>
      {isLoading ? (<div><CircleToBlockLoading size="small" color="rgb(92, 92, 241)" /></div>)
        : (
          <div>
            { (apps && apps.length) ? (apps.map((app) => (
              <Applicant
                key={app.id}
                app={app}
                job={job}
              />
            ))) : (
              <div>
                There is no Application for this role.
                Click on Recently applied above to fetch the new list, if any.
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
