import {
    ADD_POST,
    UPDATE_POST_TEXT,
    SET_USER_PROFILE,
    GET_STATUS
} from '../const'
import {profileAPI, usersAPI} from "../../api/api";

let initialState = {
    posts: [
        {id:1, message: 'James', likesCount: 2},
        {id:2, message: 'Bond', likesCount: 2},
        {id:3, message: 'James Bond', likesCount: 2},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case UPDATE_POST_TEXT: {
            return {...state, newPostText: action.payload}
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
export const addPostAC = () => ({type: ADD_POST})
export const updatePostTextAC = (text) => ({ type: UPDATE_POST_TEXT, payload: text })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, payload: profile})
export const setStatusAC = (status) => ({type: GET_STATUS, payload: status})

// Thunk creators, use only when we need to make an API request
export const getUsersProfileThunkCreator = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response))
    })
}

export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusAC(response))
    })
}
export const updateStatusThunkCreator = (statusText) => (dispatch) => {
    profileAPI.updateStatus(statusText).then(response => {
        if(response.data.resultCode === 0){
            dispatch(setStatusAC(statusText))
        }
    })
}

export default profileReducer