/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignIn from 'containers/SignInPage';
import SignUpUserPage from 'containers/SignUpUserPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import validatAccount from 'containers/ValidationAccountPage';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/sign-up" component={SignUpUserPage} />
        <Route path='/account/validate/' component={validatAccount}/>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
