import React from "react";
import {connect} from "react-redux";
import Users from "./Users/Users";
import {followUnfollowAC, setUsersAC} from "../redux/reducers/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followUnfollow: (userId) => {
            dispatch(followUnfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}



const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer