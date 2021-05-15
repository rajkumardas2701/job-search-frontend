import React, { useState } from 'react';
import '../styles/Signup.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validator from 'email-validator';
// import { useHistory } from 'react-router-dom';
import { authInit, authSuccess, authSignupFailure } from '../actions/index';
import authCall from '../utils/apiCalls';
import { userTypes } from '../constants/initialState';

const Signup = ({
  signupinit, signupsuccess, signupfailure, isLoading, errors,
}) => {
  // const history = useHistory();
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
    user_type: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const resetState = () => {
    setState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password_confirmation: '',
      user_type: ['Recruiter', 'Candidate'],
    });
    // history.push('/');
  };

  const handleErrors = (errors) => {
    <ul>
      {errors.map((error) => <li key={error} className="error">{error}</li>)}
    </ul>;
  };

  const handleSubmit = (event) => {
    const fValid = document.getElementById('form-validation');
    const shwError = document.createElement('div');
    const addValidChild = () => {
      shwError.classList.add('validationError');
      fValid.appendChild(shwError);
    };
    if (!validator.validate(state.email)) {
      shwError.innerHTML = 'Invalid email format';
      addValidChild();
    } else if (state.password !== state.password_confirmation) {
      shwError.innerHTML = 'Password don\'t match!!';
      addValidChild();
    } else {
      const user = {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation,
        user_type: state.user_type,
      };
      authCall(user, signupinit, signupsuccess, signupfailure);
    }
    event.preventDefault();
  };
  // const clearError = () => {

  // }

  return (
    <div className="signup-container">
      <h2>Register to JobHub</h2>
      <form onSubmit={handleSubmit} className="signup-form-container">
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
            value={state.password_confirmation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signup-dropdown">
          <p className="user-type-text">Signup As:</p>
          <select className="user-type-dropdown" name="user_type" onChange={handleChange}>
            {
              userTypes.map((ut) => <option className="user-type-option" key={ut} value={ut}>{ut}</option>)
            }
          </select>
        </div>
        <div className="sign-up-button-section">
          <button type="submit" className="signup-buttons">
            Sign Up
          </button>
          <button type="button" className="signup-buttons" onClick={resetState}>
            Cancel
          </button>
        </div>
      </form>
      {isLoading && <div>Loading!!!</div>}
      <div className="form-validation" id="form-validation" />
      <div className="server-error-section">{errors.length ? handleErrors(errors) : null}</div>
    </div>
  );
};

Signup.propTypes = {
  signupinit: PropTypes.func.isRequired,
  signupsuccess: PropTypes.func.isRequired,
  signupfailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Signup.defaultProps = {
  isLoading: false,
  errors: [],
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  errors: state.auth.errors.signupErrors,
});

const mapDispathToProps = (dispatch) => ({
  signupinit: () => dispatch(authInit()),
  signupsuccess: () => dispatch(authSuccess()),
  signupfailure: (error) => dispatch(authSignupFailure(error)),
});

export default connect(mapStateToProps, mapDispathToProps)(Signup);