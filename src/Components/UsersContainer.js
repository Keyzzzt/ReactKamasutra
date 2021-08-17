import React from "react";
import {connect} from "react-redux";
import {followUnfollowAC, setCurrentPageAC, setTotalCountAC, setUsersAC} from "../redux/reducers/usersReducer";
import * as axios from "axios";
import Users from "./Users/Users";

class UsersContainer extends React.Component{
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response =>{
                console.log(response)
                this.props.setUsers(response.data)
                this.props.setTotalCount(response.data.totalCount)
            })

    }
    followUnfollowHandler = (userId) => this.props.followUnfollow(userId)
    setCurrentPageHandler = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response =>{
                this.props.setUsers(response.data)
            })
    }


    render(){
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage = {this.props.currentPage}
            users = {this.props.users}
            pageSize = {this.props.pageSize}
            setCurrentPageHandler = {this.setCurrentPageHandler}
            followUnfollowHandler = {this.followUnfollowHandler}
        />
    }
}

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

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)
