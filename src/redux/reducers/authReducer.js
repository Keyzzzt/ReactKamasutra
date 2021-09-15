import {SET_USER_DATA, SET_USER_PROFILE} from "../const";
import {authAPI, usersAPI} from "../../api/api";
import {stopSubmit} from "redux-form";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            // ...action.payload идет после ...state, поэтому значения будут переопределены
            return {...state, ...action.payload}
        default:
            return state
    }
}
// Action creators
export const setAuthUserData = (userId, email, login, isAuth) =>  ({type: SET_USER_DATA, payload: {userId, email, login, isAuth }})

// Thunk creators
export const getUserCredentialsThunkCreator = () => (dispatch) => {
    authAPI.authMe().then((response) => {
        if(response) {
            let {id, email, login} = response
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
            if(response.data.resultCode === 0){
                dispatch(getUserCredentialsThunkCreator())
            } else {
                // В объекте можно передать отдельное поле, либо общее значение для формы через ключ _error
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Wrong credentials"
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
        })

}

// При выходе сервер удалит cookies
export const logoutThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authAPI.logout().then((response) => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}
