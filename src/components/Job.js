import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ job }) => (
  <>
    <li>
      {
        job.location
      }
    </li>
  </>
);

Job.propTypes = {
  job: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Job;
