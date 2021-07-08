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
import Error from './Error';

const Signin = ({
  signinInit, signinSuccess, signinFailure, isLoading, errors,
}) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const resetState = () => {
    setEmail('');
    setPassword('');
    history.push('/');
  };
  const handleSubmit = (event) => {
    if (!validator.validate(email)) {
      const err = 'Invalid email format';
      signinFailure(err);
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
    <div>
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
        {
          errors.length > 0 && <Error errors={errors} failure={signinFailure} />
        }
      </div>
      <Footer />
    </div>
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
