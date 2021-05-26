import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/Navbar';
import Home from '../layouts/Home';
import Jobs from '../containers/Jobs';
import { isLoggedIn } from '../utils/apiCalls';

const App = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState({
    logged_in: false,
    user: {},
  });
  useEffect(() => {
    const loggedIn = {
      logged_in: false,
      user: {},
    };
    isLoggedIn(setLoggedIn, loggedIn, history);
  }, []);

  return (
    <div className="App">
      <NavBar
        isLoggedIn={loggedIn.logged_in}
        user={loggedIn.user}
        handleSignOut={(loggedIn) => setLoggedIn(loggedIn)}
      />
      {
        (loggedIn.logged_in)
          ? (
            <Jobs
              user={loggedIn.user}
              isLoggedIn={loggedIn.logged_in}
              handleSignOut={(loggedIn) => setLoggedIn(loggedIn)}
            />
          ) : (<Home />)
      }
      <Footer />
    </div>
  );
};

export default App;
