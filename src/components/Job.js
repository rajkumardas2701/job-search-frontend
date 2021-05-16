import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ job }) => (
  <>
    <ul>
      <li>{job.location}</li>
      <li>{job.salary}</li>
      <li>{job.role}</li>
      <li>{job.skills}</li>
    </ul>
  </>
);

Job.propTypes = {
  job: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Job;
