import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/reduxFormValidators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import styles from './../common/FormsControls/formControls.module.css'

const Login = (props) => {
    // 3. Говорим что делать с данными
    const onSubmitHandler = ({email, password, rememberMe}) => {
        props.loginThunkCreator(email, password, rememberMe)
    }
    if(props.isAuth){
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
const LoginForm = (props) => {
    return (
        // 1. handleSubmit сделает preventDefault, соберет введенные данные и упакует их в объект
        <form onSubmit={props.handleSubmit}>
            <h1>Login</h1>
            <div>
                <Field name={"email"} placeholder={"Email"} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field name={"password"} type={"password"} placeholder={"Password"} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field name={"rememberMe"} type="checkbox" component={Input}/> Remember Me
            </div>
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
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