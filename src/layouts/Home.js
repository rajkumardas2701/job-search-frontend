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
        <button type="button"><a href="/signin">Sign In</a></button>
        <p>Or</p>
        <button type="button"><a href="/signup">Sign Up</a></button>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;
