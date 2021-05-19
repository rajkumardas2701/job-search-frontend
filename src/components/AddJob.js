import '../styles/Signup.css';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const AddJob = ({ handleForm }) => {
  // const history = useHistory();
  const [state, setState] = useState({
    role: '',
    location: '',
    salary: '',
    skills: '',
  });
  const [showForm, setShowForm] = useState(false);
  useEffect(() => { setShowForm(showForm); }, [showForm]);
  const {
    role, location, salary, skills,
  } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const resetState = () => {
    setState({
      role: '',
      location: '',
      salary: '',
      skills: '',
    });
    // history.push('/');
    handleForm(!!showForm);
  };

  const handleSubmit = () => {

  };

  return (
    <>
      {console.log(showForm)}
      <div className="signup-container">
        <h2 className="form-head">Add a new Job</h2>
        <form onSubmit={handleSubmit} className="signup-form-container">
          <div className="input-section">
            <input
              className="form-inputs"
              placeholder="Role"
              type="text"
              name="role"
              value={role}
              onChange={handleChange}
              required
            />
            <input
              className="form-inputs"
              placeholder="location"
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
              required
            />
            <input
              className="form-inputs"
              placeholder="Salary per annum"
              type="number"
              name="salary"
              value={salary}
              onChange={handleChange}
              required
            />
            <input
              className="form-inputs"
              placeholder="Skills"
              type="text"
              name="skills"
              value={skills}
              onChange={handleChange}
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
    </>
  );
};

AddJob.propTypes = {
  handleForm: PropTypes.func.isRequired,
};

// AddJob.defaultProps = {
//   props: false,
// };

export default AddJob;
