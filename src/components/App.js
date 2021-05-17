// import Signin from './Signin';
// import Signup from './Signup';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/Navbar';
// import Home from '../layouts/Home';
import Jobs from '../containers/Jobs';
import '../styles/App.css';

const App = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState({
    logged_in: false,
    user: {},
  });

  const isLoggedIn = () => {
    axios
      .get('http://localhost:3001/api/v1/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && !loggedIn.logged_in) {
          setLoggedIn({
            logged_in: true,
            user: response.data.user,
          });
        } else if (!response.data.logged_in && loggedIn.logged_in) {
          setLoggedIn({
            logged_in: false,
            user: {},
          });
          history.push('/signin');
        }
      })
      .catch((error) => error);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  const handleLogout = () => {
    setLoggedIn({
      logged_in: false,
      user: {},
    });
  };

  return (
    <div className="App">
      <NavBar
        loggedIn={loggedIn.logged_in}
        name={loggedIn.user.firstname}
        handleLogout={handleLogout}
      />
      <Jobs />
      <Footer />
    </div>
  );
};

export default App;
