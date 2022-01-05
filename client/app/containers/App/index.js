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
import SignInAdminPage from 'containers/SignInAdminPage';
import DashboardAdminContainer from 'containers/DashboardAdminContainer';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import validatAccount from 'containers/ValidationAccountPage';
import displayItemsPage from '../DisplayItemPage'
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
        <Header/>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUpUserPage} />
        <Route path='/account/validate/' component={validatAccount}/>
        <Route path='/admin-login' component={SignInAdminPage}/>
        <Route path='/admin-dashboard' component={DashboardAdminContainer}/>
        <Route path='/' component={displayItemsPage}/>
        <Route component={NotFoundPage} />
      </Switch>
      <Footer/>
      <GlobalStyle />
    </div>
  );
}
