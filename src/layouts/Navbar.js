import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles/NavBar.css';

const NavBar = ({ isLoggedIn, user, handleSignOut }) => {
  const history = useHistory();
  const [loginState, setLoginState] = useState(isLoggedIn);
  const [userState, setUserState] = useState(user);
  useEffect(() => {
    setLoginState(isLoggedIn);
    setUserState(user);
  }, [isLoggedIn, user]);

  const handlelogout = (event) => {
    event.preventDefault();
    axios.delete(`http://localhost:3001/api/v1/sessions/${userState.id}`, { withCredentials: true })
      .then((response) => {
        console.log('Response from Logout', response);
        handleSignOut({
          logged_in: false,
          user: {},
        });
      })
      .catch((error) => {
        console.log(error);
      });
    history.push('/signin');
  };

  const handlelogin = (event) => {
    event.preventDefault();
    history.push('/signin');
  };

  let showUser;

  if (userState && userState.firstname === undefined) {
    showUser = '';
  } else if (userState) {
    showUser = `Hello, ${userState.firstname.charAt(0).toUpperCase() + userState.firstname.slice(1)}`;
  } else {
    showUser = '';
  }
  const btnfunc = (loginState) => {
    if (loginState) {
      return (
        <button
          type="button"
          className="logout-btn"
          onClick={handlelogout}
        >
          Logout
        </button>
      );
    }
    return (
      <button
        type="button"
        className="logout-btn"
        onClick={handlelogin}
      >
        Login
      </button>
    );
  };
  return (
    <>
      <div className="navbar">
        <div className="logo-section">
          <Link to="/" className="logoAnc">
            <h1 className="logoHead" data-testid="navbar-heading">JobHub</h1>
          </Link>
        </div>
        <div className="nav-greet">{showUser}</div>
        <div className="nav-btns">{btnfunc(loginState)}</div>
      </div>
    </>
  );
};

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleSignOut: PropTypes.func,
};

NavBar.defaultProps = {
  isLoggedIn: false,
  user: {},
  handleSignOut: () => {},
};

export default NavBar;
