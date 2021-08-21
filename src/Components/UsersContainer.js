import React from "react";
import {connect} from "react-redux";
import {
    toggleIsFetching,
    followUnfollow,
    setCurrentPage,
    setTotalCount,
    setUsers
} from "../redux/reducers/usersReducer";
import * as axios from "axios";
import Users from "./Users/Users";
import Loader from "./Loader";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching()
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response =>{
                console.log(response)
                this.props.setUsers(response.data)
                this.props.setTotalCount(response.data.totalCount)
                this.props.toggleIsFetching()
            })

    }
    followUnfollowHandler = (userId) => this.props.followUnfollow(userId)
    setCurrentPageHandler = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching()
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response =>{
                this.props.setUsers(response.data)
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
                    followUnfollowHandler = {this.followUnfollowHandler}
                    isFetching = {this.props.isFetching}
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
        isFetching: state.usersPage.isFetching
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
    followUnfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching
})(UsersContainer)
