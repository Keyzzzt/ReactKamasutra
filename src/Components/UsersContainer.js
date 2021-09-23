import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCountAC,
    setUsersAC,
    requestUsers, follow, unFollow
} from "../redux/reducers/usersReducer";
import Users from "./Users/Users";
import Loader from "./common/Loader";
import {
    getCurrentPage,
    getFollowUnfollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersReselect
} from "../redux/usersSelectors";

class UsersContainer extends React.Component{
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props
        requestUsers(currentPage, pageSize)
    }

    setCurrentPageHandler = (pageNumber) => {
        const {requestUsers, pageSize} = this.props
        requestUsers(pageNumber, pageSize)
    }

    render(){
        return (
            <>
                {this.props.isFetching && <Loader />}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage = {this.props.currentPage}
                    users = {this.props.users}
                    pageSize = {this.props.pageSize}
                    setCurrentPageHandler = {this.setCurrentPageHandler}
                    follow = {this.props.follow}
                    unFollow = {this.props.unFollow}
                    isFetching = {this.props.isFetching}
                    followUnfollowInProgress = {this.props.followUnfollowInProgress}
                />
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsersReselect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followUnfollowInProgress: getFollowUnfollowInProgress(state)
    }
}

export default connect(mapStateToProps,{
        setUsersAC,
        setCurrentPage,
        setTotalUsersCountAC,
        requestUsers,
        follow,
        unFollow
    })(UsersContainer)
