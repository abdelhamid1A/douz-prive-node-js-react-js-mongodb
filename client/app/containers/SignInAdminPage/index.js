/**
 *
 * SignInAdminPage
 *
 */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory,Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignInAdminPage,{makeSelectLogingAdmin,makeSelectLogingAdminLoading,makeSelectLogingAdminError} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import '../../shared/styles.css'
import { loginAdminRequestAction } from './actions';
import CustomInput from '../../components/CustomInput'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function SignInAdminPage() {
  useInjectReducer({ key: 'signInAdminPage', reducer });
  useInjectSaga({ key: 'signInAdminPage', saga });

  toast.configure()
  const { error, admin, loading } = useSelector(mapStateToProps)
  const dispatch = useDispatch()
  let history = useHistory();

  const initialValues = { email: '', password: '' }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  })

  const onSubmit = values => {
    // console.log(values);
    dispatch(loginAdminRequestAction(values))
    admin&&history.push('/admin-dashboard')

  }
  console.log("admin",admin);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <Form action="" className="form-section mt-5">
                        <h4 className="mb-4 pb-3" style={{color: 'white'}}>Admin Log In</h4>
                        <CustomInput name="email" placeholder="email" type="text" icon="input-icon fa fa-user" />
                        <CustomInput name="password" placeholder="password" type="text" icon="input-icon fa fa-lock"  />
                        <Field type="submit" className="btnI mt-4" value={loading?'loading':'sign in'} />
                        <p className="mb-0 mt-4 text-center"><Link to="sign-up" className="link">create account</Link></p>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}

SignInAdminPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  admin:makeSelectLogingAdmin,
  error:makeSelectLogingAdminError,
  loading:makeSelectLogingAdminLoading,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignInAdminPage);
