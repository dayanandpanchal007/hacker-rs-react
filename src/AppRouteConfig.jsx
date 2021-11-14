import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home, Login, PageNotFound, Register, Leaderboard, ShowProfile } from './components';

import { RouteGaurd } from './Gaurds';

const AppRouteConfig = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <RouteGaurd exact path='/home' component={Home} />
        <RouteGaurd exact path='/leaderboard' component={Leaderboard} />
        <RouteGaurd exact path='/showprofile/:email' component={ShowProfile} />
        <Route exact path='/page-not-found' component={PageNotFound} />
        <Redirect from='/' to='/home' />
        <Redirect from='*' to='/page-not-found' />
      </Switch>
    </Router>
  );
}
 
export default AppRouteConfig;
