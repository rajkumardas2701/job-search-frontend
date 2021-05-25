import React, { useState } from 'react';
import '../styles/Signup.css';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  const handleErrors = (errors) => {
    <ul>
      {errors.map((error) => <li key={error} className="error">{error}</li>)}
    </ul>;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    authCall('signin', user, signinInit, signinSuccess, signinFailure, history);
  };

  return (
    <>
      <NavBar />
      <div className="signup-container">
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
        <div className="server-error-section">{errors.length ? handleErrors(errors) : null}</div>
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
