import React, { useState } from 'react';
import '../styles/Signup.css';
import { useHistory } from 'react-router-dom';

const Signin = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;

  const handleChange = ({ target: { name: value } }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <div className="signup-container">
      <h2>Login to JobHub</h2>
      <form className="signup-form-container">
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
        </div>
        <div className="sign-up-button-section">
          <button type="button" className="signup-buttons">
            Sign In
          </button>
          <button type="button" className="signup-buttons">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
