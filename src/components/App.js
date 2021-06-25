import React, { useState, useEffect } from 'react';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/Navbar';
import Home from '../layouts/Home';
import Jobs from '../containers/Jobs';

const App = () => {
  const [loggedIn, setLoggedIn] = useState({
    logged_in: false,
    user: {},
  });
  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('loggedInState'));
    if (loggedIn === null) {
      const temp = {
        logged_in: false,
        user: {},
      };
      setLoggedIn(temp);
    } else {
      setLoggedIn(loggedIn);
    }
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
