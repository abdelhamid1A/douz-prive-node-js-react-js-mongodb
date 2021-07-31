/**
 *
 * SignUpUserPage
 *
 */

import React,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import {useDispatch} from 'react-redux'
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignUpUserPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {signUpUserRequestAction} from './actions';


export function SignUpUserPage() {
  useInjectReducer({ key: 'signUpUserPage', reducer });
  useInjectSaga({ key: 'signUpUserPage', saga });

  const dispatch = useDispatch()
  let history = useHistory();
  const [picture, setPicture] = useState({})
const onchange = e => {
  // console.log(e);
        setPicture(e.target.files[0])
        // console.log(picture);
        // const file = e.currentTarget.files[0];
        // const reader = new FileReader();

        // if (file) {
        //   reader.onloadend = () => {
        //     setPicture(
        //       file,
        //       // previewURI: reader.result
        //     );
        //   };
        //   console.log(reader.readAsDataURL(file));
        //   // form.setFieldValue("img", file);
        // }
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
        dispatch(signUpUserRequestAction(formData))
    }
    console.log(picture);
  return (
    <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <div className="main ">
            <Form action="" className="form-section mt-5">
    
              <Field type="text" placeholder="name" name="first_name" id="" />
              <div className="errMessage"><ErrorMessage name="first_name"  /></div>
    
              <Field type="text" placeholder="email" name="last_name" id="last_name" />
              <div className="errMessage"><ErrorMessage name="last_name"  /></div>
    
              <Field type="text" placeholder="email" name="email" />
              <div className="errMessage"><ErrorMessage name="email"  /></div>
    
              <Field type="text" placeholder="password" name="password" />
              <div className="errMessage"><ErrorMessage name="password"  /></div>

              <Field type="text" placeholder="identity" name="city" id="city" />
              <div className="errMessage"><ErrorMessage name="city"  /></div>

              <Field type="text" placeholder="identity" name="phone" id="phone" />
              <div className="errMessage"><ErrorMessage name="phone"  /></div>
    
              <input id="picture" name="picture" className="form-control" type="file" onChange={onchange} multiple />
                        <div className="errMessage"><ErrorMessage name="picture" /></div>

              <Field type="submit" value="sign Up" />
              {/* <button className="btn btn-primary  float-end">add Product</button> */}
            </Form>
          </div>
        </Formik>
  );
}

SignUpUserPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signUpUserPage: makeSelectSignUpUserPage(),
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
