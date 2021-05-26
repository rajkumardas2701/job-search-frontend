import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Signup from './components/Signup';
import Signin from './components/Signin';
import NotFound from './layouts/NotFound';
import JobDetail from './components/JobDetail';
import JobApplicants from './containers/JobApplicants';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/job_details/:id" component={JobDetail} />
      <Route exact path="/job_apps/:id" component={JobApplicants} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
