import {
    FOLLOW,
    UNFOLLOW,
    SET_ACTIVE_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS,
    TOGGLE_ISFETCHING_USERS
} from "../const";

const initialState = {
    users: [],
    isFetching: false,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ISFETCHING_USERS:
            return {...state, isFetching: !state.isFetching}
        case SET_USERS:
            // return ниже будеть при новом запросе будет добавлять пользователей вниз списка
            // return {...state, users: [...state.users, ...action.payload]}

            // return ниже будеть при новом запросе будет показывать только пользователей с конкретной страницы
            return {...state, users: action.payload.items}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.payload}
        case FOLLOW:
           return {...state, users: state.users.map(user => {
               if(user.id === action.payload){
                   return {...user, followed: true}
               }
               return user
               })}
        case UNFOLLOW:
            return {...state, users: state.users.map(user => {
                    if(user.id === action.payload){
                        return {...user, followed: false}
                    }
                    return user
                })}
        case SET_ACTIVE_PAGE :
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, payload:  userId})
export const unFollow = (userId) => ({type: UNFOLLOW, payload:  userId})
export const setUsers = (users) => ({type: SET_USERS, payload: users})
export const setCurrentPage = (pageNumber) => ({type: SET_ACTIVE_PAGE, payload: pageNumber})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount})
export const toggleIsFetching = () => ({type: TOGGLE_ISFETCHING_USERS})

export default usersReducer