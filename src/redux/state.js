

import {
    ADD_POST,
    UPDATE_POST_TEXT,
    UPDATE_MESSAGE_TEXT,
    CREATE_MESSAGE
} from './const'
import dialogsReducer from './reducers/dialogsReducer';
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message: 'James', likesCount: 2},
                {id:2, message: 'Bond', likesCount: 2},
                {id:3, message: 'James Bond', likesCount: 2},
            ],
        newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log('rerender entire tree')
    },
    getState(){
        return this._state
    },

    subscriber(observer){
        this._callSubscriber = observer;
      },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }

}



export const addPostAC = () => ({type: ADD_POST})
export const updatePostTextAC = (text) => ({ type: UPDATE_POST_TEXT, payload: text })
export const updateMessageTextAC = (text) => ({ type: UPDATE_MESSAGE_TEXT, payload: text })
export const createNewMessage = () => ({type: CREATE_MESSAGE})

export default store
window.store = store