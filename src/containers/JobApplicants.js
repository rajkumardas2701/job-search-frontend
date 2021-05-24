import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/Navbar';

const JobApplicants = () => {
  const location = useLocation();
  const { user, loginState, job } = location.state;
  const handleClick = () => {
    console.log('nothing here');
  };
  return (
    <>
      <NavBar
        isLoggedIn={loginState}
        user={user}
      />
      <p>You will see Applicants soon!!!</p>
      <ul>
        <li>{job.location}</li>
        <li>{job.salary}</li>
        <li>{job.role}</li>
        <li>{job.skills}</li>
        <button type="button" onClick={handleClick}>See Applicants</button>
      </ul>
      <Footer />
    </>
  );
};

export default JobApplicants;
