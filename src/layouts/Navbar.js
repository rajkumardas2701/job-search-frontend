import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = (props1, props2, handleLogout) => {
  const [state, setState] = useState(props1, props2);

  useEffect(() => {
    setState(props1, props2);
  }, [props1, props2]);

  return (
    <>
      {
        ('loggedIn' in state)

          ? (

            <div className="navbar">
              <div>
                <Link to="/" className="logoAnc">
                  <h1 className="logoHead" data-testid="navbar-heading">JobHub</h1>
                </Link>
              </div>
              <div>
                {
          state.name ? `Hello, ${state.name}` : ''
        }
              </div>
              {
          (state.loggedIn)
            ? (
              <button type="button" onClick={handleLogout} className="login-logout-btn">Logout</button>
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

export default NavBar;
