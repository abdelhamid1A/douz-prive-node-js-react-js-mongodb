/**
 *
 * SignInPage
 *
 */

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../redux/selectors';

import { signInUserRequestAction } from '../redux/actions';
import CustomInput from '../../../../components/customInput'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SignInPage() {
    toast.configure();
    const { error, user, loading } = useSelector(userSelector)
    const dispatch = useDispatch()
    let history = useHistory();
    const initialValues = { email: '', password: '' }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
    })

    const onSubmit = values => {
        dispatch(signInUserRequestAction(values))
            .then(({ data }) => console.log(data))

    }
    useEffect(() => {

        !loading && user && user.token && history.push('/');
        error && toast.error(error, { theme: "dark" })
    }, [user, error])
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
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <CustomInput name="email" placeholder="email" type="text" icon="input-icon fa fa-user" />
                                                <CustomInput name="password" placeholder="password" type="password" icon="input-icon fa fa-lock" />
                                                <Field type="submit" className="btnI mt-4" value={loading ? 'loading' : 'sign in'} />
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

