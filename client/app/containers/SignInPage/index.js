/**
 *
 * SignInPage
 *
 */

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { htmlFormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectSignInPageUser, makeSelectSignInPageError, makeSelectSignInPageLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { signInUserRequestAction } from './actions';

export function SignInPage() {
  useInjectReducer({ key: 'signInPage', reducer });
  useInjectSaga({ key: 'signInPage', saga });
  const { error, user, loading } = useSelector(mapStateToProps)
  const dispatch = useDispatch()
  let history = useHistory();
  const initialValues = { email: '', password: '' }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(5, 'enter more then 5 chars').required('Required'),
  })
  error && console.log(error);
  const onSubmit = values => {
    dispatch(signInUserRequestAction(values))
    
  }
  user && user.token && history.push('sign-up')
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="main ">
        <h2>sign in</h2>
        {error && <h2>{error}</h2>}
        <Form action="" className="form-section mt-5">

          <Field type="text" placeholder="email" name="email" />
          <div className="errMessage"><ErrorMessage name="email" /></div>

          <Field type="text" placeholder="password" name="password" />
          <div className="errMessage"><ErrorMessage name="password" /></div>

          <Field type="submit" value={loading?'loading':'sign in'} />
          {/* <button className="btn btn-primary  float-end">add Product</button> */}
        </Form>
      </div>
    </Formik>
  );
}

SignInPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectSignInPageUser,
  error: makeSelectSignInPageError,
  loading: makeSelectSignInPageLoading
});


const withConnect = connect(
  mapStateToProps,
);

export default compose(withConnect)(SignInPage);
