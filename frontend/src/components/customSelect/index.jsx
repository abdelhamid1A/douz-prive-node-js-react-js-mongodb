import React from 'react'
// import PropTypes from 'prop-types';
import { Field, ErrorMessage, FieldInputProps } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from '@material-ui/core/styles';
// import styles from '../../../assets/jss/material-dashboard-pro-react/customSelectStyle';

const useStyles = makeStyles({});


const MaterialUISelectField = ({
    errorString,
    label,
    children,
    value,
    name,
    onChange,
    onBlur,
}) => {
    const classes = useStyles();
    return (
        <FormControl fullWidth className={classes.selectFormControl} >
            <InputLabel  className={classes.selectLabel} style={{color:'grey',textAlign:'center'}} >{label}</InputLabel>
            <Select name={name} onChange={onChange} onBlur={onBlur} value={value} style={{color:'grey'}} className="form-style">
                {children}
            </Select>
            <FormHelperText style={{color: 'red'}}>{errorString}</FormHelperText>
        </FormControl>
    );
};
export default function CustomSelect({
    label,
    name,
    items
}) {
    const classes = useStyles();
    return (
        <div className="FormikSelect">
            <Field
            style={{color:'white'}}
                name={name}
                as={MaterialUISelectField}
                label={label}
                errorString={<ErrorMessage name={name}  />}
            >
                <MenuItem
          disabled
          classes={{
            root: classes.selectMenuItem,
          }}
        >
          Select
        </MenuItem>
                {items &&items.map((item,index) => (
                    <MenuItem 
                    
                    key={index}
                    classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                    }} 
                    value={item._id||item}>
                        {item.name||item}
                    </MenuItem>
                ))}
            </Field>
        </div>
    )
}