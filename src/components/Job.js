import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({ job, user }) => (
  <>
    {console.log(user)}
    <ul>
      <li>{job.location}</li>
      <li>{job.salary}</li>
      <li>{job.role}</li>
      <li>{job.skills}</li>
      {
      (user.user.user_type === 'Candidate')
        ? (<Link to="/">View and Apply</Link>)
        : (<Link to="/">Check Applicants</Link>)
      }
    </ul>
  </>
);

Job.propTypes = {
  job: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Job;
