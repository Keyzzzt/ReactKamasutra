

import {
    ADD_POST,
    UPDATE_POST_TEXT
} from '../const'

let initialState = {
    posts: [
        {id:1, message: 'James', likesCount: 2},
        {id:2, message: 'Bond', likesCount: 2},
        {id:3, message: 'James Bond', likesCount: 2},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.payload
            return state
        default:
            return state
    }
}

export default profileReducer