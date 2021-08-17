import {FOLLOW_UNFOLLOW, SET_ACTIVE_PAGE, SET_TOTAL_COUNT, SET_USERS} from "../const";

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            // return ниже будеть при новом запросе будет добавлять пользователей вниз списка
            // return {...state, users: [...state.users, ...action.payload]}

            // return ниже будеть при новом запросе будет показывать только пользователей с конкретной страницы
            return {...state, users: action.payload.items}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.payload}
        case FOLLOW_UNFOLLOW:
           return {...state, users: state.users.map(user => {
               if(user.id === action.payload){
                   return {...user, follow: !user.follow}
               }
               return user
               })}
        case SET_ACTIVE_PAGE :
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}

export const followUnfollowAC = (userId) => ({type: FOLLOW_UNFOLLOW, payload:  userId})
export const setUsersAC = (users) => ({type: SET_USERS, payload: users})
export const setCurrentPageAC = (pageNumber) => ({type: SET_ACTIVE_PAGE, payload: pageNumber})
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount})

export default usersReducer