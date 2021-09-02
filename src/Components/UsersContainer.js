import React from "react";
import {connect} from "react-redux";
import {
    toggleIsFetching,
    followUnfollow,
    setCurrentPage,
    setTotalCount,
    setUsers, follow, unFollow, followUnfollowInProgress, toggleIsFollowing
} from "../redux/reducers/usersReducer";
import * as axios from "axios";
import Users from "./Users/Users";
import Loader from "./Loader";
import {usersAPI} from "../api/api";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching()
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data =>{
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.toggleIsFetching()
            })

    }
    // follow, unFolow тут не action creator, это callback который создал connect, а называется так же для коройткой записи объекта передаваемого в connect.
    follow = (userId) => this.props.follow(userId)
    unFollow = (userId) => this.props.unFollow(userId)

    setCurrentPageHandler = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching()

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data =>{
                this.props.setUsers(data.items)
                this.props.toggleIsFetching()

            })
    }

    render(){
        return (
            <>
                {this.props.isFetching && <Loader />}
                <div  style={{backgroundColor: 'red', width: '200px', height: '200px'}}></div>
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage = {this.props.currentPage}
                    users = {this.props.users}
                    pageSize = {this.props.pageSize}
                    setCurrentPageHandler = {this.setCurrentPageHandler}
                    follow= {this.follow}
                    unFollow = {this.unFollow}
                    isFetching = {this.props.isFetching}
                    followUnfollowInProgress = {this.props.followUnfollowInProgress}
                    toggleIsFollowing = {this.props.toggleIsFollowing}
                />
            </>
        )
    }
}
// dispatch закинет сюда connect
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followUnfollowInProgress: state.usersPage.followUnfollowInProgress
    }
}
// dispatch закинет сюда connect
// const mapDispatchToProps = (dispatch) => {
//     return {
//         followUnfollow: (userId) => dispatch(followUnfollowAC(userId)),
//         setUsers: (users) => dispatch(setUsersAC(users)),
//         setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
//         setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
//         toggleIsFetching: () => dispatch(toggleIsFetchingAC())
//     }
// }



export default connect(mapStateToProps,{
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching,
    toggleIsFollowing
})(UsersContainer)
