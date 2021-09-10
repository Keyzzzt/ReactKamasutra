import {
    ADD_POST,
    UPDATE_POST_TEXT,
    SET_USER_PROFILE
} from '../const'
import {usersAPI} from "../../api/api";

let initialState = {
    posts: [
        {id:1, message: 'James', likesCount: 2},
        {id:2, message: 'Bond', likesCount: 2},
        {id:3, message: 'James Bond', likesCount: 2},
    ],
    newPostText: '',
    profile: null
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
        default:
            return state
    }
}

// Action creators
export const addPostAC = () => ({type: ADD_POST})
export const updatePostTextAC = (text) => ({ type: UPDATE_POST_TEXT, payload: text })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, payload: profile})

// Thunk creators
export const getUsersProfileThinkCreator = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response))
    })
}

export default profileReducer