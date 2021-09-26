import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'thisApp/authReducer/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'thisApp/authReducer/GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    url: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            // ...action.payload идет после ...state, поэтому значения будут переопределены
            return {...state, ...action.payload}
        default:
            return state
    }
}
// Action creators
export const setAuthUserData = (userId, email, login, isAuth) =>  ({type: SET_USER_DATA, payload: {userId, email, login, isAuth }})
const setCaptchaURL = (captchaURL) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaURL}})

// Thunk creators
export const getUserCredentialsThunkCreator = () => async (dispatch) => {
    const response = await authAPI.authMe()
        if(response) {
            let {id, email, login} = response
            dispatch(setAuthUserData(id, email, login, true))
        }
}

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
            if(response.data.resultCode === 0){
                dispatch(getUserCredentialsThunkCreator())
            } else {
                if(response.data.resultCode === 10){
                    dispatch(getCaptchaURL())
                }
                //stopSubmit, В объекте можно передать отдельное поле, либо общее значение для формы через ключ _error
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Wrong credentials"
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
}

// При выходе сервер удалит cookies
export const logoutThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.logout()
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
}

export const getCaptchaURL = () => async (dispatch) => {
    const response = await authAPI.getCaptcha()
    const captchaURL = response.data.url
    dispatch(setCaptchaURL(captchaURL))
}