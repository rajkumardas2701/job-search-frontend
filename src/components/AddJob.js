import '../styles/AddJob.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { postJob } from '../utils/apiCalls';

const AddJob = ({
  handleForm, postInit, postSuccess, postFailure, jobsCall,
  fetchInit,
  fetchSuccess,
  fetchFail,
}) => {
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [skills, setSkills] = useState('');
  const [showForm, setShowForm] = useState(false);
  useEffect(() => { setShowForm(showForm); }, [showForm]);
  const resetState = () => {
    setRole('');
    setLocation('');
    setSalary('');
    setSkills('');
    handleForm(!!showForm);
  };

  const handleSubmit = () => {
    const job = {
      role, location, salary, skills,
    };
    postJob(postInit, postSuccess, postFailure, jobsCall,
      fetchInit,
      fetchSuccess,
      fetchFail, job);
    handleForm(!!showForm);
  };

  return (
    <div>
      <div className="signup-container-2">
        <h2 className="form-head">Add a new Job</h2>
        <form onSubmit={handleSubmit} className="signup-form-container">
          <div className="input-section">
            <input
              className="form-inputs"
              placeholder="Role"
              type="text"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
            <input
              className="form-inputs"
              placeholder="location"
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <input
              className="form-inputs"
              placeholder="Salary per annum"
              type="number"
              name="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
            <input
              className="form-inputs"
              placeholder="Skills"
              type="text"
              name="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            />
          </div>
          <div className="sign-up-button-section">
            <button type="submit" className="signup-buttons">
              Add
            </button>
            <button type="button" className="signup-buttons" onClick={resetState}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddJob.propTypes = {
  handleForm: PropTypes.func.isRequired,
  postInit: PropTypes.func.isRequired,
  postSuccess: PropTypes.func.isRequired,
  postFailure: PropTypes.func.isRequired,
  jobsCall: PropTypes.func,
  fetchInit: PropTypes.func,
  fetchSuccess: PropTypes.func,
  fetchFail: PropTypes.func,
};

AddJob.defaultProps = {
  jobsCall: () => {},
  fetchInit: () => {},
  fetchSuccess: () => {},
  fetchFail: () => {},
};

export default AddJob;
