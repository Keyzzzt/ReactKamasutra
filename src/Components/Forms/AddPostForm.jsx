import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "../../styles/MyPosts.module.css";
import {maxLengthCreator, required} from "../../utils/reduxFormValidators";
import {Textarea} from "../common/FormsControls/FormsControls";

const AddPostForm = (props) => {
    return (
        // onSubmitHandler переданный сюда от родителя будет далее обрабатывать данные полученные от redux-form
        <ReduxFormAddPost onSubmit={props.onSubmitHandler}/>
    )
}

// Когда мы передаем функцию с замыканием в компоненту, она возвращает нам новую функцию
// поэтому начинаются проблемы, поэтому вызов maxLengthCreator нужно сделать за пределами компоненты
const maxLength10 = maxLengthCreator(10)

const AddPost = (props) => {
return (
    <form onSubmit={props.handleSubmit} className={s.newPost}>
        <div>
            <Field name={"newPostBody"} placeholder={"New post text"} component={Textarea} validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
)
}


const ReduxFormAddPost =  reduxForm({
    // state для redux-form один, но форм будет много, поэтому каждой форме даем уникальное имя.
    form: 'addPost'
})(AddPost)

export default AddPostForm;