
import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = 'thisApp/profileReducer/ADD_POST'
const SET_USER_PROFILE = 'thisApp/profileReducer/SET_USER_PROFILE'
const GET_STATUS = 'thisApp/profileReducer/GET_STATUS'

let initialState = {
    posts: [
        {id:1, message: 'James', likesCount: 2},
        {id:2, message: 'Bond', likesCount: 2},
        {id:3, message: 'James Bond', likesCount: 2},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.payload,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.payload}
        case GET_STATUS:
            return {...state, status: action.payload}
        default:
            return state
    }
}

// Action creators
export const addPostAC = (value) => ({type: ADD_POST, payload: value})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, payload: profile})
export const setStatusAC = (status) => ({type: GET_STATUS, payload: status})

// Thunk creators, use only when we need to make an API request
export const getUsersProfileThunkCreator = (userId) => async (dispatch) => {
    const response = await usersAPI.getUserProfile(userId)
        dispatch(setUserProfile(response))
}

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
        dispatch(setStatusAC(response))
}
export const updateStatusThunkCreator = (statusText) => async (dispatch) => {
    const response = await profileAPI.updateStatus(statusText)
        if(response.data.resultCode === 0){
            dispatch(setStatusAC(statusText))
        }
}

export default profileReducer