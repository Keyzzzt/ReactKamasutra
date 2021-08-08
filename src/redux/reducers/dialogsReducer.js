'use strict';

import {
    UPDATE_MESSAGE_TEXT,
    CREATE_MESSAGE
} from './../const'

export const dialogsReducer = (state, action) => {
    switch(action.type){
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.payload
            return state
        case CREATE_MESSAGE:
            if(state.newMessageText === ''){
                alert('Please enter message')
                return state
            }
            state.messages.push({id:3, message: state.newMessageText})
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export default dialogsReducer