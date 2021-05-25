import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Job.css';

const Job = ({ job, user, isLoggedIn }) => {
  const [loginState, setLoginState] = useState(isLoggedIn);
  useEffect(() => { setLoginState(isLoggedIn); }, [isLoggedIn]);

  return (
    <div className="job-section">
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
      {
      (user.user.user_type === 'Candidate')
        ? (
          <div className="job-btn">
            { (user && loginState && job) ? (
              <Link
                to={{
                  pathname: `/job_details/${job.id}`,
                  state: {
                    user: user.user,
                    loginState,
                    job,
                  },
                }}
                className="text-link"
              >
                View and Apply
              </Link>
            ) : (<div>Still loading</div>) }

          </div>
        )
        : (
          <div className="job-btn">
            {
            (user && loginState && job) ? (
              <Link
                to={{
                  pathname: `/job_apps/${job.id}`,
                  state: {
                    user: user.user,
                    loginState,
                    job,
                  },
                }}
                className="text-link"
              >
                Check Applicants
              </Link>
            ) : (<div>Still loading</div>)
          }
          </div>
        )
      }
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  isLoggedIn: PropTypes.bool,
};

Job.defaultProps = {
  isLoggedIn: false,
};

export default Job;
