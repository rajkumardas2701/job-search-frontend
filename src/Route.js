import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import App from './components/App';
import Home from './layouts/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import NotFound from './layouts/NotFound';

const Routes = () => {
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>;
};

export default Routes;
