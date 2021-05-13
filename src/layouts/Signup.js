import React from 'react';
import '../styles/Signup.css';

const Signup = () => (
  <div className="signup-container">
    <h2>Register to JobHub</h2>
    <form className="signup-form-container">
      <div className="input-section">
        <input
          className="form-inputs"
          placeholder="Firstname"
          type="text"
          name="firstname"
          // value={firstname}
          // onChange={handleChange}
          required
        />
        <input
          className="form-inputs"
          placeholder="Lastname"
          type="text"
          name="lastname"
          // value={lastname}
          // onChange={handleChange}
          required
        />
        <input
          className="form-inputs"
          placeholder="Email"
          type="text"
          name="email"
          // value={email}
          // onChange={handleChange}
          required
        />
        <input
          className="form-inputs"
          placeholder="Password"
          type="password"
          name="password"
          // value={email}
          // onChange={handleChange}
          required
        />
        <input
          className="form-inputs"
          placeholder="Confirm password"
          type="password"
          name="password_confirmation"
          // value={email}
          // onChange={handleChange}
          required
        />
      </div>
      <div className="signup-dropdown">
        <p className="user-type-text">Signup As:</p>
        <select className="user-type-dropdown">
          <option className="user-type-option">Recruiter</option>
          <option className="user-type-option">Candidate</option>
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

export default Signup;
