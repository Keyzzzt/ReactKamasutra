import React from "react";
import {Field, reduxForm} from "redux-form";

const Login = () => {
    // 3. Говорим что делать с данными
    const onSubmitHandler = (formData) => {
        // Тут обраюатываем объект с данными
        console.log(formData)
    }
    return (
        <div>
            {/* 2. Объект который собрал handleSubmit мы передаем сюда*/}
            <ReduxLoginForm onSubmit={onSubmitHandler}/>
        </div>
    )
}
// В props redux-form закинет очень много функционала
const LoginForm = (props) => {
    return (
        // 1. handleSubmit сделает preventDefault, соберет введенные данные и упакует их в объект
        <form onSubmit={props.handleSubmit}>
            <h1>Login</h1>
            <div>
                <Field name={"login"} placeholder={"Login"} component={"input"}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"Password"} component={"input"}/>
            </div>
            <div>
                <Field name={"rememberMe"} type="checkbox" component={"input"}/> Remember Me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

// Через HOC reduxForm наделяем нашу целевую компоненту SignInForm функционалом redux-form
const ReduxLoginForm = reduxForm({
    // state для redux-form один, но форм будет много, поэтому каждой форме даем уникальное имя.
    form: 'login'
})(LoginForm)


export default Login;