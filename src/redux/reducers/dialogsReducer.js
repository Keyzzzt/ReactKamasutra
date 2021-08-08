
import {
    UPDATE_MESSAGE_TEXT,
    CREATE_MESSAGE
} from '../const'

let initialState = {
    dialogs: [
        {id: 1, name: 'James'},
        {id: 2, name: 'Bond'},
        {id: 3, name: 'James Bond'},
    ],
    messages: [
        {id:1, message:'Hello' },
        {id:2, message:'Hola' },
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {
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