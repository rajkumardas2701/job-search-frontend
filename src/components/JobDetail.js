import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import NavBar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
// import Home from '../layouts/Home';

const JobDetail = ({ state }) => {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(location.state.user);
  const [loginState, setLoginState] = useState(location.state.loginState);
  // const { user } = location.state;
  useEffect(() => { setCurrentUser(currentUser); }, [currentUser]);
  useEffect(() => { setLoginState(loginState); }, [loginState]);
  // useEffect(() => { setProp(prop); }, [prop]);

  return (
    <>
      <NavBar
        isLoggedIn={loginState}
        user={currentUser}
      />
      {console.log({ state })}
      {console.log(currentUser)}
      {console.log(loginState)}
      {/* {console.log(prop)} */}
      {/* {console.log(isLoggedIn)} */}
      {/* {console.log(props.location.state.user)} */}
      <p>You will see Job details soon!!!</p>
      {/* {
          (loggedIn.logged_in)
            ? (
              <Jobs
                user={loggedIn.user}
                isLoggedIn={loggedIn.logged_in}
                handleSignOut={(loggedIn) => setLoggedIn(loggedIn)}
              />
            ) : (<Home />)
        } */}
      <Footer />
    </>
  );
};

JobDetail.propTypes = {
  state: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  // isLoggedIn: PropTypes.bool.isRequired,
};

JobDetail.defaultProps = {
  state: {},
};

export default JobDetail;
