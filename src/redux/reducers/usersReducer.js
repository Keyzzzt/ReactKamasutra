import {
    FOLLOW,
    UNFOLLOW,
    SET_ACTIVE_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS,
    TOGGLE_IS_FOLLOWING,
    TOGGLE_IS_FETCHING_USERS
} from "../const";
import {usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/reducerHelper";

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followUnfollowInProgress: [], // Для того чтобы не disable все кнопки, мы сюда будем заносить UserID
    fake: 10
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING_USERS:
            return {...state, isFetching: action.payload}
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
                    [...state.followUnfollowInProgress, action.payload.userId]
                        :
                    // Получили ответ с сервера - убрали userId из массива followUnfollowInProgress
                    [...state.followUnfollowInProgress.filter(id => id !== action.payload.userId)]
            }
        // case FOLLOW:
        //    return {...state, users: state.users.map(user => {
        //        if(user.id === action.payload){
        //            return {...user, followed: true}
        //        }
        //        return user
        //        })}
        case FOLLOW:
            return {...state, users: updateObjectInArray(state.users, action.payload, "id", {followed: true})}
        // case UNFOLLOW:
        //     return {...state, users: state.users.map(user => {
        //             if(user.id === action.payload){
        //                 return {...user, followed: false}
        //             }
        //             return user
        //         })}
        case SET_ACTIVE_PAGE :
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}


// Action creators
export const followSuccessAC = (userId) => ({type: FOLLOW, payload:  userId})
export const unFollowSuccessAC = (userId) => ({type: UNFOLLOW, payload:  userId})
export const setUsersAC = (users) => ({type: SET_USERS, payload: users})
export const setCurrentPage = (pageNumber) => ({type: SET_ACTIVE_PAGE, payload: pageNumber})
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING_USERS, payload: isFetching})
export const toggleFollowingProgressAC = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, payload: {isFetching, userId}})

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    const response = await apiMethod(userId)
    if(response === 0 ){
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgressAC(false, userId))
}

// Thunk creators
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsersAC(response.items))
    dispatch(setTotalUsersCountAC(response.totalCount))

}
export const follow = (userId) => async (dispatch) => {
    followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccessAC)
}


export const unFollow = (userId) => async (dispatch) => {
    followUnFollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccessAC)

}


export default usersReducer