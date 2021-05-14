import React, { useState } from 'react';
import '../styles/Signup.css';
// import { useHistory } from 'react-router-dom';
// import { authInit, authSuccess, authSignupFailure } from '../actions/index';
// import userTypes from '../contacts/initialState';

const Signup = () => {
  // const history = useHistory();
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    userType: ['Recruiter', 'Candidate'],
  });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <div className="signup-container">
      <h2>Register to JobHub</h2>
      <form className="signup-form-container">
        <div className="input-section">
          <input
            className="form-inputs"
            placeholder="Firstname"
            type="text"
            name="firstname"
            value={state.firstname}
            onChange={handleChange}
            required
          />
          <input
            className="form-inputs"
            placeholder="Lastname"
            type="text"
            name="lastname"
            value={state.lastname}
            onChange={handleChange}
            required
          />
          <input
            className="form-inputs"
            placeholder="Email"
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
          <input
            className="form-inputs"
            placeholder="Password"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
          <input
            className="form-inputs"
            placeholder="Confirm password"
            type="password"
            name="password_confirmation"
            value={state.passwordConfirmation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signup-dropdown">
          <p className="user-type-text">Signup As:</p>
          <select className="user-type-dropdown" name="user_type" onChange={handleChange}>
            {
              state.userType.map((ut) => <option className="user-type-option" key={ut} value={ut}>{ut}</option>)
            }
          </select>
        </div>
        <div className="sign-up-button-section">
          <button type="button" className="signup-buttons">
            Sign Up
          </button>
          <button type="button" className="signup-buttons">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
// {
//   signupinit, signupsuccess, signupfailure, isLoading, errors,
// }

export default Signup;
