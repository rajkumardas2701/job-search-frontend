import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/Navbar';

const JobApplicants = () => {
  const location = useLocation();
  const { user, loginState } = location.state;
  return (
    <>
      <NavBar
        isLoggedIn={loginState}
        user={user}
      />
      <p>You will see Applicants soon!!!</p>
      <Footer />
    </>
  );
};

export default JobApplicants;
