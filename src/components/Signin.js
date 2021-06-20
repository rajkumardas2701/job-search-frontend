import React, { useState } from 'react';
import '../styles/Signin.css';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import validator from 'email-validator';
import { connect } from 'react-redux';
import { CircleToBlockLoading } from 'react-loadingg';
import { authCall } from '../utils/apiCalls';
import { authInit, authSuccess, authSigninFailure } from '../actions/index';
import NavBar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Signin = ({
  signinInit, signinSuccess, signinFailure, isLoading, errors,
}) => {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };
  const resetState = () => {
    setState({
      email: '',
      password: '',
    });
    history.push('/');
  };
  const handleErrors = (errors) => (
    <>
      {
      errors.length > 0 && errors.map((error, idx) => <div key={`${error}-${idx + 1}`} className="signin-error">{error}</div>)
      }
    </>
  );
  const handleSubmit = (event) => {
    const fValid = document.getElementById('form-validation');
    const shwError = document.createElement('div');
    const errorEle = document.getElementById('server-error-section-signin');
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
    if (!validator.validate(state.email)) {
      shwError.innerHTML = 'Invalid email format';
      addValidChild();
    } else {
      const user = {
        email,
        password,
      };
      authCall('signin', user, signinInit, signinSuccess, signinFailure, history);
    }
    event.preventDefault();
  };

  return (
    <>
      <NavBar />
      <div className="signin-container">
        <h2 className="form-head">Login to JobHub</h2>
        <form onSubmit={handleSubmit} className="signup-form-container">
          <div className="input-section">
            <input
              className="form-inputs"
              placeholder="Email"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              className="form-inputs"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <p className="form-head" id="form-signup-text">
              Don&apos;t have an account?
              <br />
              {' '}
              Click&nbsp;
              <Link to="/signup">here</Link>
              {' '}
              to register
            </p>
          </div>
          <div className="sign-up-button-section">
            <button type="submit" className="signup-buttons">
              Sign In
            </button>
            <button type="button" className="signup-buttons" onClick={resetState}>
              Cancel
            </button>
          </div>
        </form>
        {isLoading && <div><CircleToBlockLoading size="small" color="rgb(92, 92, 241)" /></div>}
        <div className="form-validation" id="form-validation" />
        <div className="server-error-section-signin" id="server-error-section-signin">{errors.length ? handleErrors(errors) : null}</div>
      </div>
      <Footer />
    </>
  );
};

Signin.propTypes = {
  signinInit: PropTypes.func.isRequired,
  signinSuccess: PropTypes.func.isRequired,
  signinFailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Signin.defaultProps = {
  isLoading: false,
  errors: [],
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  errors: state.auth.errors.signinErrors,
});

const mapDispathToProps = (dispatch) => ({
  signinInit: () => dispatch(authInit()),
  signinSuccess: () => dispatch(authSuccess()),
  signinFailure: (err) => dispatch(authSigninFailure(err)),
});

export default connect(mapStateToProps, mapDispathToProps)(Signin);
