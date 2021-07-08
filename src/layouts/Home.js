import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import '../styles/Home.css';

const Home = () => (
  <div>
    <NavBar />
    <div className="homeContainer">
      <h2 className="hire-text">
        Hire or Get Hired
        <br />
        <br />
        @
      </h2>
      <h1 className="main-content">JobHub</h1>
      <div className="homeButtonSection">
        <Link to="/signin" className="home-btn">Sign In</Link>
        <p className="text-or">OR</p>
        <Link to="/signup" className="home-btn">Sign Up</Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
