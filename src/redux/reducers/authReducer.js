import {SET_USER_DATA, SET_USER_PROFILE} from "../const";
import {usersAPI} from "../../api/api";


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
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}
// Action creators
export const setAuthUserData = (userId, email, login) =>  ({type: SET_USER_DATA, payload: {userId, email, login}})

// Thunk creators
export const getUserCredentialsThunkCreator = () => (dispatch) => {
    usersAPI.getUserCredentials().then((response) => {
        if(response) dispatch(setAuthUserData(response.id, response.email, response.login))
    })
}

