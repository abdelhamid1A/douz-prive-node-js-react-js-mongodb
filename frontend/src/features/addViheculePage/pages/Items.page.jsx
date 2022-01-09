import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory, Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux'
// import { signUpUserRequestAction } from '../redux/actions';
// import { signUpSelector } from '../redux/selectors';
import CustomInput from '../../../components/customInput'
import CustomSelect from '../../../components/customSelect'
import {addItem} from '../services/server.api.service';
import {getDataFromLocalStorage} from '../../../helper/local.storage.helper'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function AddItemPage() {
      let history = useHistory();
    //   toast.configure();
    const [token, setToken] = useState(getDataFromLocalStorage('token'))
    const [picture, setPicture] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const onchange = e => {
        setPicture(e.target.files[0])
    }
    // error && toast.error(error)
    const initialValues = { title: '', price: '', description: '', city: '', phone: '', type: "", picture: '' }
    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
        description: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        type: Yup.string().required('Required'),
        phone: Yup.string().matches(/(?=.*(05|06|07))[0-9]{10}/, 'Is not in correct format').min(4, 'make a strong password more then 4 char').required('Required'),
        // picture:Yup.required('ee')
        picture: Yup.mixed()
            .nullable()
            // .required()
            .test("FILE_SIZE", "Uploaded file is too big.",
            // .test("FILE_SIZE", "",
                () => {
                    // console.log("picture: ", picture);
                    if (picture) {
                        return picture.size <= 20000000;
                    } else {
                        return true;
                    }
                })
    })
    const onSubmit = values => {
        const { title, price, city, description, phone, password, type } = values
        const formData = new FormData();
        formData.append('picture', picture);
        formData.append('title', title);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('city', city);
        formData.append('phone', phone);
        formData.append('type', type);
        // formData.append('token', token);
        setIsLoading(true);
        addItem(formData,`Bearer ${token}`)
        .then(({data})=>{
            // console.log(data);
            history.push('/')
        })
        .catch((error)=>console.log(error))
        .finally(()=>setIsLoading(false));
        // for (var value of formData.values()) {
        //     console.log(value);
        // }
        // console.log(formData);
        // dispatch(signUpUserRequestAction(values))
    }
    // console.log(picture);
    //   useEffect(() =>{

    //     !loading&&user && user?.user?.token && history.push('/');
    //     error && toast.error(error,{theme: "dark"})
    //   },[user,error])
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <div className="row full-height justify-content-center">
                <div className="col-12 text-center align-self-center py-1">
                    <div className="section pb-1 pt-1 pt-sm-2 text-center">
                        <div className="card-3d-wrap mx-auto" style={{ marginBottom: '160px' }}>
                            <div className="card-3d-wrapper" style={{ height: '165%' }}>
                                <div className="card-front">
                                    <div className="center-wrap">
                                        <div className="section text-center">
                                            <Form action="" className="form-section mt-5">
                                                <h4 className="mb-4 pb-3">add item</h4>
                                                <CustomInput name="title" placeholder="title" type="text" />
                                                <CustomInput name="price" placeholder="price" type="text" />
                                                <CustomInput name="description" placeholder="description" type="text" />
                                                <CustomInput name="phone" placeholder="phone" type="text" />
                                                <CustomInput name="city" placeholder="city" type="text" />
                                                <CustomSelect
                                                    name="type"
                                                    items={['car', 'bike']}
                                                    label="Type"
                                                    helperText={<ErrorMessage name='assignedTo' />}
                                                />
                                                {/* <CustomInput name="picture" placeholder="picture" type="file"  change={onchange}/> */}
                                                <input id="picture" name="picture" className="form-style mt-3" type="file" onChange={onchange} multiple />
                                                <div className="errMessage"><ErrorMessage name="picture" /></div>
                                                <Field type="submit" className="btnI mt-4" value={'add item'} />
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