// import PropTypes from 'prop-types';
import React from 'react';
// { useState, useEffect }
import { useLocation } from 'react-router';
import NavBar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
// import Home from '../layouts/Home';

const JobDetail = () => {
  const location = useLocation();
  const { user, loginState } = location.state;

  return (
    <>
      <NavBar
        isLoggedIn={loginState}
        user={user}
      />
      {console.log(user)}
      {console.log(loginState)}
      <p>You will see Job details soon!!!</p>
      <Footer />
    </>
  );
};

export default JobDetail;
