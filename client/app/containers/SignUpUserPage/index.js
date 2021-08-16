/**
 *
 * SignUpUserPage
 *
 */

import React,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory,Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import {useDispatch,useSelector} from 'react-redux'
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectSignUpUserPageUser,makeSelectSignUpUserPageError,makeSelectSignUpUserPageLoading} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {signUpUserRequestAction} from './actions';
import CustomInput from '../../components/CustomInput'


export function SignUpUserPage() {
  useInjectReducer({ key: 'signUpUserPage', reducer });
  useInjectSaga({ key: 'signUpUserPage', saga });

  const dispatch = useDispatch()
  // let history = useHistory();
  const {user,error,loading} = useSelector(mapStateToProps)
  const [picture, setPicture] = useState({})
const onchange = e => {
        setPicture(e.target.files[0])
    }
    const initialValues = {first_name : '',last_name: '',email: '',password: '',city: '',phone:'',picture:''}
    const validationSchema = Yup.object({
        first_name: Yup.string().min(5, 'enter full name').required('Required'),
        last_name: Yup.string().min(5, 'enter full name').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(5, 'enter more then 5 chars').required('Required'),
        city: Yup.string().min(8, 'enter your correct address ').required('Required'),
        phone: Yup.string().matches(/(?=.*(05|06|07))[0-9]{10}/, 'Is not in correct format').min(4, 'make a strong password more then 4 char').required('Required'),
        picture :Yup.mixed()
        .nullable()
        // .required()
        .test("FILE_SIZE", "Uploaded file is too big.", 
            () => {
              console.log("picture: ", picture);
              if (picture) {
                return picture.size <= 2000000;
              } else {
                return true;
              }
            })
    })
    const onSubmit=values=>{
      const { first_name,last_name, email,password,city,phone } = values
        const formData = new FormData();
        formData.append('picture', picture);
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('city', city);
        formData.append('phone', phone);
        // console.log(values);
        dispatch(signUpUserRequestAction(formData))
    }
    // console.log(picture);
  return (
    // <Formik
    //       initialValues={initialValues}
    //       validationSchema={validationSchema}
    //       onSubmit={onSubmit}
    //     >
    //       <div className="main ">
    //         <Form action="" className="form-section mt-5">
    
    //           <Field type="text" placeholder="name" name="first_name" id="" />
    //           <div className="errMessage"><ErrorMessage name="first_name"  /></div>
    
    //           <Field type="text" placeholder="email" name="last_name" id="last_name" />
    //           <div className="errMessage"><ErrorMessage name="last_name"  /></div>
    
    //           <Field type="text" placeholder="email" name="email" />
    //           <div className="errMessage"><ErrorMessage name="email"  /></div>
    
    //           <Field type="text" placeholder="password" name="password" />
    //           <div className="errMessage"><ErrorMessage name="password"  /></div>

    //           <Field type="text" placeholder="identity" name="city" id="city" />
    //           <div className="errMessage"><ErrorMessage name="city"  /></div>

    //           <Field type="text" placeholder="identity" name="phone" id="phone" />
    //           <div className="errMessage"><ErrorMessage name="phone"  /></div>
    
    //           <input id="picture" name="picture" className="form-control" type="file" onChange={onchange} multiple />
    //                     <div className="errMessage"><ErrorMessage name="picture" /></div>

    //           <Field type="submit" value="sign Up" />
    //           {/* <button className="btn btn-primary  float-end">add Product</button> */}
    //         </Form>
    //       </div>
    //     </Formik>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-1">
          <div className="section pb-1 pt-1 pt-sm-2 text-center">
            <div className="card-3d-wrap mx-auto" style={{marginBottom: '160px'}}>
              <div className="card-3d-wrapper" style={{height:'165%'}}>
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <Form action="" className="form-section mt-5">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <CustomInput name="first_name" placeholder="first name" type="text" icon="input-icon fa fa-user" />
                        <CustomInput name="last_name" placeholder="last name" type="text" icon="input-icon fa fa-user"  />
                        <CustomInput name="email" placeholder="email" type="text" icon="input-icon fa fa-envelope"  />
                        <CustomInput name="password" placeholder="password" type="text" icon="input-icon fa fa-lock"  />
                        <CustomInput name="city" placeholder="city" type="text" icon="input-icon fas fa-city"  />
                        <CustomInput name="phone" placeholder="phone" type="text" icon="input-icon fa fa-phone"  />
                        {/* <CustomInput name="picture" placeholder="picture" type="file" icon="input-icon fa fa-lock"  change={onchange}/> */}
                        <input id="picture" name="picture" className="form-style" type="file" onChange={onchange} multiple />
                        <div className="errMessage"><ErrorMessage name="picture" /></div>
                        <Field type="submit" className="btnI mt-4" value={loading?'loading':'sign in'} />
                        <p className="mb-0 mt-4 text-center"><Link to="/" className="link">login Page</Link></p>
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

SignUpUserPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectSignUpUserPageUser,
  error: makeSelectSignUpUserPageError,
  loading: makeSelectSignUpUserPageLoading,
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

export default compose(withConnect)(SignUpUserPage);
