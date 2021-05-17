import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import '../styles/Home.css';

const Home = () => (
  <>
    <NavBar />
    <div className="homeContainer">
      <h2>Hire or Get Hired</h2>
      <h3>at</h3>
      <h1>JobHub</h1>
      <div className="homeButtonSection">
        <Link to="/signin">Sign In</Link>
        <p>Or</p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;
