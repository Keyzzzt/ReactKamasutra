import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/reduxFormValidators";

const DialogMessageForm = (props)  => {
    return (
        <ReduxDialogForm onSubmit={props.onSubmitHandler}/>
    )
}

// Когда мы передаем функцию с замыканием в компоненту, она возвращает нам новую функцию
// поэтому начинаются проблемы, поэтому вызов maxLengthCreator нужно сделать за пределами компоненты
const maxLength50 = maxLengthCreator(50)

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*Поле name, это имя значения, под которым он будет сохранен в объект*/}
                <Field name={"newMessageBody"} placeholder={"Message text"} component={Textarea} validate={[required, maxLength50]}/>
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