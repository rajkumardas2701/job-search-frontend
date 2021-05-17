import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Signup from './components/Signup';
import Signin from './components/Signin';
// import Jobs from './containers/Jobs';
import NotFound from './layouts/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      {/* <Route exact path="/jobs" component={Jobs} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
