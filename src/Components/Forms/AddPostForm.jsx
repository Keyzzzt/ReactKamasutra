import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "../../styles/MyPosts.module.css";

const AddPostForm = (props) => {
    return (
        <ReduxFormAddPost onSubmit={props.onSubmitHandler}/>
    )
}


const AddPost = (props) => {
return (
    <form onSubmit={props.handleSubmit} className={s.newPost}>
        <div>
            <Field name={"newPostBody"} placeholder={"New post text"} component={"textarea"}/>
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