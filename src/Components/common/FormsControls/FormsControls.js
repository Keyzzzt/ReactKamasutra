import React from "react";
import styles from './formControls.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const isError = meta.error && meta.touched
    return (
        <div className={styles.formControl + ' ' + (isError ? styles.error : '')} >
            {/*Когда создаем оболочку над компонентой всегда нужно передать props дальше.*/}
            <div>
                {props.children}
            </div>
            {isError && <span>{meta.error}</span>}
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