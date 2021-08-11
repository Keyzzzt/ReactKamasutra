import {FOLLOW_UNFOLLOW, SET_USERS} from "../const";

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.payload]}
        case FOLLOW_UNFOLLOW:
           return {...state, users: state.users.map(user => {
               if(user.id === action.payload){
                   return {...user, follow: !user.follow}
               }
               return user
               })}
        default:
            return state
    }
}

export const followUnfollowAC = (userId) => ({type: FOLLOW_UNFOLLOW, payload:  userId})
export const setUsersAC = (users) => ({type: SET_USERS, payload: users})

export default usersReducer