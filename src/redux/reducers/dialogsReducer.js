
import {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_MESSAGE: {
            let newMessage = {id: 3, message: action.payload}
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }
}


export const createNewMessageAC = (value) => ({type: CREATE_MESSAGE, payload: value})

export default dialogsReducer