import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/reduxFormValidators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import styles from './../common/FormsControls/formControls.module.css'

const Login = ({loginThunkCreator, isAuth}) => {
    // 3. Говорим что делать с данными
    const onSubmitHandler = ({email, password, rememberMe}) => {
        loginThunkCreator(email, password, rememberMe)
    }
    if(isAuth){
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            {/* 2. Объект который собрал handleSubmit мы передаем сюда*/}
            <ReduxLoginForm onSubmit={onSubmitHandler}/>
        </div>
    )
}

// Когда мы передаем функцию с замыканием в компоненту, она возвращает нам новую функцию
// поэтому начинаются проблемы, поэтому вызов maxLengthCreator нужно сделать за пределами компоненты
const maxLength20 = maxLengthCreator(20)

// В props redux-form закинет очень много функционала
const LoginForm = ({handleSubmit, error}) => {
    return (
        // 1. handleSubmit сделает preventDefault, соберет введенные данные и упакует их в объект
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
             {createField("email", "email", "Enter email", Input, [required, maxLength20])}
             {createField("password", "password", "Enter password", Input, [required, maxLength20])}
             {createField("rememberMe", "checkbox", null, Input, [], "Remember Me")}
            {error && <div className={styles.formSummaryError}>{error}</div>}
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

// Чтобы не засорять презентационную компоненту подключаем connect
export default connect(mapStateToProps, {loginThunkCreator})(Login);