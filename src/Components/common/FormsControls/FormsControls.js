import React from "react";
import styles from './formControls.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/reduxFormValidators";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const isError = error && touched
    return (
        <div className={styles.formControl + ' ' + (isError ? styles.error : '')} >
            {/*Когда создаем оболочку над компонентой всегда нужно передать props дальше.*/}
            <div>
                {children}
            </div>
            {isError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (name, type, placeholder, component, validate, textContent = "") => {
    return (
        <div>
            <Field name={name} type={type} placeholder={placeholder} component={component} validate={validate}/>
        </div>
    )
}

// {createField("email", "email", "Enter email", Input, [required, maxLength20])}
// {createField("password", "password", "Enter password", Input, [required, maxLength20])}
// {createField("rememberMe", "checkbox", null, Input, [], "Remember Me")}