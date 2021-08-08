'use strict';

import {
    ADD_POST,
    UPDATE_POST_TEXT
} from './../const'

const profileReducer = (state, action) => {
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