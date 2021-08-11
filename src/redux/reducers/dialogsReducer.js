
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
        case UPDATE_MESSAGE_TEXT: {
            return {...state, newMessageText: action.payload}
        }
        case CREATE_MESSAGE: {
            if (state.newMessageText === '') {
                alert('Please enter message')
                return state
            }
            let newMessage = {id: 3, message: state.newMessageText}
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        default:
            return state
    }
}

export default dialogsReducer