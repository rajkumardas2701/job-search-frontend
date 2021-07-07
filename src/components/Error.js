import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Error = ({ errors, failure }) => {
  useEffect(() => {
    setTimeout(() => {
      errors.splice(0, errors.length);
      failure([]);
    }, 5000);
  }, []);
  return (
    <div className="server-error-section-signup">
      {
        errors.map((err, idx) => <div key={`${err}-${idx + 1}`} className="signin-error">{err}</div>)
      }
    </div>
  );
};

Error.propTypes = {
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  failure: PropTypes.func.isRequired,
};

export default Error;
