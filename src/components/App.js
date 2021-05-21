import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/Navbar';
// import Signin from './Signin';
import Home from '../layouts/Home';
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
        console.log('Response from App', response);
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
          history.push('/home');
        }
      })
      .catch((error) => error);
  };

  useEffect(() => {
    isLoggedIn();
  }, [loggedIn]);

  return (
    <div className="App">
      <NavBar
        isLoggedIn={loggedIn.logged_in}
        // props={loggedIn}
        user={loggedIn.user}
        handleSignOut={(loggedIn) => setLoggedIn(loggedIn)}
      />
      {
        (loggedIn.logged_in) ? (<Jobs user={loggedIn.user} />) : (<Home />)
      }
      <Footer />
      {console.log('from App return', loggedIn)}
    </div>
  );
};

export default App;
