import React from 'react';
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
        <a href="/signin">Sign In</a>
        <p>Or</p>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;
