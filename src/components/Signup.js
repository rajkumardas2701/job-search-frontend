import React, { useState } from 'react';
import '../styles/Signup.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validator from 'email-validator';
import { useHistory } from 'react-router-dom';
import { CircleToBlockLoading } from 'react-loadingg';
import { authInit, authSuccess, authSignupFailure } from '../actions/index';
import { authCall } from '../utils/apiCalls';
import { userTypes } from '../constants/initialState';
import NavBar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Signup = ({
  signupinit, signupsuccess, signupfailure, isLoading, errors,
}) => {
  const history = useHistory();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirmation, setPasswordconfirmation] = useState('');
  const [usertype, setUsertype] = useState('');

  const resetState = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setPasswordconfirmation('');
    setUsertype('');
    history.push('/');
  };
  const handleErrors = (errors) => (
    <div>
      {errors.map((error, idx) => <div key={`${error}-${idx + 1}`} className="signin-error">{error}</div>)}
    </div>
  );

  const handleSubmit = (event) => {
    const fValid = document.getElementById('form-validation');
    const shwError = document.createElement('div');
    const errorEle = document.getElementById('server-error-section-signup');
    setTimeout(() => {
      if (errorEle.hasChildNodes()) {
        errorEle.removeChild(errorEle.childNodes[0]);
        errors.splice(0, errors.length);
      }
    }, 5000);
    const addValidChild = () => {
      shwError.classList.add('validationError');
      fValid.appendChild(shwError);
      setTimeout(() => {
        if (fValid.hasChildNodes()) {
          fValid.removeChild(fValid.childNodes[0]);
        }
      }, 5000);
    };
    if (!validator.validate(email)) {
      shwError.innerHTML = 'Invalid email format';
      addValidChild();
    } else if (password !== passwordconfirmation) {
      shwError.innerHTML = 'Passwords don\'t match!!';
      addValidChild();
    } else {
      const user = {
        firstname,
        lastname,
        email,
        password,
        password_confirmation: passwordconfirmation,
        user_type: usertype,
      };
      if (user.usertype === '') { user.usertype = 'Candidate'; }
      authCall('signup', user, signupinit, signupsuccess, signupfailure, history);
    }
    event.preventDefault();
  };

  return (
    <div>
      <NavBar />
      <div className="signup-container">
        <h2 className="form-head">Register to JobHub</h2>
        <form onSubmit={handleSubmit} className="signup-form-container">
          <div className="input-section">
            <input
              className="form-inputs"
              placeholder="Firstname"
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              className="form-inputs"
              placeholder="Lastname"
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <input
              className="form-inputs"
              placeholder="Email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="form-inputs"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="form-inputs"
              placeholder="Confirm password"
              type="password"
              name="password_confirmation"
              value={passwordconfirmation}
              onChange={(e) => setPasswordconfirmation(e.target.value)}
              required
            />
          </div>
          <div className="signup-dropdown">
            <p className="user-type-text">Signup As:</p>
            <select className="user-type-dropdown" name="user_type" onChange={(e) => setUsertype(e.target.value)}>
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
        {isLoading && <div><CircleToBlockLoading size="small" color="rgb(92, 92, 241)" /></div>}
        <div className="form-validation" id="form-validation" />
        <div className="server-error-section-signup" id="server-error-section-signup">{errors.length ? handleErrors(errors) : null}</div>
      </div>
      <Footer />
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
