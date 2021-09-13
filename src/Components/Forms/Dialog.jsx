import React from "react";
import {Field, reduxForm} from "redux-form";

const DialogMessageForm = (props)  => {
    return (
        <ReduxDialogForm onSubmit={props.onSubmitHandler}/>
    )
}

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*Поле name, это имя значения, под которым он будет сохранен в объект*/}
                <Field name={"newMessageBody"} placeholder={"Message text"} component={"input"}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const ReduxDialogForm = reduxForm({
    // state для redux-form один, но форм будет много, поэтому каждой форме даем уникальное имя.
    form: 'dialog'
})(DialogForm)

export default DialogMessageForm;