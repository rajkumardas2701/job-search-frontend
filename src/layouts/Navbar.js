import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import '../styles/NavBar.css';

const NavBar = (loggedIn) => {
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);
  useEffect(() => {
    setIsLoggedIn(loggedIn);
  }, [loggedIn]);
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="logoAnc">
          <h1 className="logoHead" data-testid="navbar-heading">JobHub</h1>
        </Link>
      </div>
      {/* {console.log(isLoggedIn)} */}
      {
      !(Object.keys(isLoggedIn) === 0)
        ? (
          <div>
            {(isLoggedIn) ? (
              <div>
                <Link to="/logout">Logout</Link>
              </div>
            )
              : (
                <div>
                  <Link to="/signin">Signin</Link>
                  <Link to="/signup">Signup</Link>
                </div>
              )}
          </div>
        )
        : (
          <div>
            {/* {console.log('error')} */}
          </div>
        )
      }
      {

      }
    </div>
  );
};

/* <p>
Hello
{isLoggedIn.loggedIn.user.firstname}
</p> */
export default NavBar;
