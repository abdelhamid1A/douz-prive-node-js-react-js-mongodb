/**
 *
 * CustomInput
 *
 */

import React from 'react';
import { Field, ErrorMessage } from 'formik';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CustomInput({
    name,
    placeholder,
    type,
    icon,
    change
}) {
    return (
        <div className="form-group my-3">
            {/* <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" /> */}
            {/* {change ?
       <Field type={type} className="form-style" placeholder={placeholder} name={name} onChange={change && change} />
       :<Field type={type} className="form-style" placeholder={placeholder} name={name}  />
       } */}
            <Field type={type} className="form-style" placeholder={placeholder} name={name} />
            <div className="errMessage"><ErrorMessage name={name} /></div>
            <i className={icon}></i>
        </div>
    );
}

CustomInput.propTypes = {};

export default CustomInput;
