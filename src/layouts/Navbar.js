import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles/NavBar.css';

const NavBar = ({ loggedIn, user, handlelogout }) => {
  console.log(loggedIn);
  const history = useHistory();
  const [state, setState] = useState(loggedIn);
  useEffect(() => {
    setState(loggedIn);
  }, [loggedIn]);

  const handleSignOut = (event) => {
    event.preventDefault();
    console.log('inside handle logout');
    axios.post('http://localhost:3001/api/v1/logout', { withCredentials: true })
      .then((response) => {
        console.log(response);
        handlelogout({
          logged_in: false,
          user: {},
        });
      })
      .catch((error) => {
        console.log(error);
      });
    history.push('/signin');
  };

  return (
    <>
      {console.log(loggedIn)}
      {
        (state)

          ? (

            <div className="navbar">
              <div>
                <Link to="/" className="logoAnc">
                  <h1 className="logoHead" data-testid="navbar-heading">JobHub</h1>
                </Link>
              </div>
              <div>
                {
          user.firstname ? `Hello, ${user.firstname}` : ''
        }
              </div>
              {
          (loggedIn)
            ? (
              <button type="button" onClick={handleSignOut} className="login-logout-btn">Logout</button>
            ) : (
              <div>
                <Link to="/signin">Signin</Link>
                <Link to="/signup">Signup</Link>
              </div>
            )
          }
            </div>
          )
          : (
            <div />
          )
      }
    </>
  );
};

NavBar.propTypes = {
  loggedIn: PropTypes.bool,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handlelogout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  loggedIn: false,
  user: {},
};

export default NavBar;
