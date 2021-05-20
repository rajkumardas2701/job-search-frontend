import '../styles/CandidateJobs.css';
import '../styles/RecruiterJobs.css';
// import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postJobInit, postJobSuccess, postJobfailure } from '../actions/index';
import AddJob from '../components/AddJob';

const RecruiterJobs = ({
  postInit, postSuccess, postFailure, isLoading, errors, job,
}) => {
  const [showForm, setShowForm] = useState(false);
  // useEffect(() => { setShowForm(showForm); }, [showForm]);
  // const history = useHistory();
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <h3 className="view">Recruiter&apos;s View</h3>
      {!showForm && (
      <button
        type="button"
        className="add-job-btn"
        onClick={handleClick}
      >
        Add Job
      </button>
      )}
      {showForm && (
      <AddJob
        handleForm={(showForm) => setShowForm(showForm)}
        postInit={(isLoading) => postInit(isLoading)}
        postSuccess={(job) => postSuccess(job)}
        postFailure={(errors) => postFailure(errors)}
      />
      )}
      {console.log(job)}
      {job.length > 0 && <div>Job has been added</div>}
      {errors && console.log(errors)}
      {isLoading && <div>Loading Job</div>}

    </div>
  );
};

RecruiterJobs.propTypes = {
  postInit: PropTypes.func.isRequired,
  postSuccess: PropTypes.func.isRequired,
  postFailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  job: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

RecruiterJobs.defaultProps = {
  isLoading: false,
  errors: [],
  job: [],
};

const mapStateToProps = (state) => ({
  isLoading: state.postJobData.isLoading,
  errors: state.postJobData.errors,
  job: state.postJobData.job,
});

const mapDispatchToProps = (dispatch) => ({
  postInit: (isLoading) => dispatch(postJobInit(isLoading)),
  postSuccess: (job) => dispatch(postJobSuccess(job)),
  postFailure: (errors) => dispatch(postJobfailure(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterJobs);
