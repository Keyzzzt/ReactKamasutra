import {SET_USER_DATA, SET_USER_PROFILE} from "../const";


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

export const setAuthUserData = (userId, email, login) =>  ({type: SET_USER_DATA, payload: {userId, email, login}})

