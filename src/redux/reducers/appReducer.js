import {getUserCredentialsThunkCreator} from "./authReducer";
const SET_INITIALIZED = "thisApp/appReducer/SET_INITIALIZED"



let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state
    }
}
// Action creators
export const setInitializedSuccess = () =>  ({type: SET_INITIALIZED})

// Thunk creators
export const  initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserCredentialsThunkCreator())
        Promise.all([promise]).then(() => {
            dispatch(setInitializedSuccess())
    })
}

export default appReducer;
