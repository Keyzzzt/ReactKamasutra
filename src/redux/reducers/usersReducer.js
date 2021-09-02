import {
    FOLLOW,
    UNFOLLOW,
    SET_ACTIVE_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS,
    TOGGLE_IS_FOLLOWING,
    TOGGLE_IS_FETCHING_USERS
} from "../const";

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followUnfollowInProgress: [] // Для того чтобы не disable все кнопки, мы сюда будем заносить UserID
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING_USERS:
            return {...state, isFetching: !state.isFetching}
        case SET_USERS:
            // return ниже будеть при новом запросе будет добавлять пользователей вниз списка
            // return {...state, users: [...state.users, ...action.payload]}

            // return ниже будеть при новом запросе будет показывать только пользователей с конкретной страницы
            return {...state, users: action.payload}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.payload}
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followUnfollowInProgress: action.payload.isFetching
                        ?
                    // Нажали кнопку - занесли userId в массив followUnfollowInProgress
                    [...state.followUnfollowInProgress, action.payload.user.id]
                        :
                    // Получили ответ с сервера - убрали userId из массива followUnfollowInProgress
                    [...state.followUnfollowInProgress.filter(id => id != action.payload.userId)]
            }
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
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING_USERS})
export const toggleIsFollowing = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, payload: {isFetching, userId}})

export default usersReducer