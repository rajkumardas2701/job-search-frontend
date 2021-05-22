import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({ job, user, isLoggedIn }) => {
  const [loginState, setLoginState] = useState(isLoggedIn);
  useEffect(() => { setLoginState(isLoggedIn); }, [isLoggedIn]);

  return (
    <>
      {/* {console.log(user)}
      {console.log('login state passed', loginState)} */}
      <ul>
        <li>{job.location}</li>
        <li>{job.salary}</li>
        <li>{job.role}</li>
        <li>{job.skills}</li>
        {
        (user.user.user_type === 'Candidate')
          ? (
            <div>
              { (user && loginState) ? (
                <Link to={{
                  pathname: `/job_details/${job.id}`,
                  state: {
                    user: user.user,
                    loginState,
                  },
                }}
                >
                  View and Apply
                </Link>
              ) : (<div>Still loading</div>) }

            </div>
          )
          : (<Link to={`/job_apps/${job.id}`}>Check Applicants</Link>)
        }
      </ul>
    </>
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
