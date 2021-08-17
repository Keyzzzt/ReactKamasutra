import React from "react";
import {connect} from "react-redux";
import Users from "./Users/Users";
import {followUnfollowAC, setCurrentPageAC, setTotalCountAC, setUsersAC} from "../redux/reducers/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followUnfollow: (userId) => {
            dispatch(followUnfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}



const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer