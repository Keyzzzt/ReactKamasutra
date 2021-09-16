import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalCount,
    setUsers,
    getUsersThunkCreator,
    followThunkCreator, unFollowThunkCreator
} from "../redux/reducers/usersReducer";
import Users from "./Users/Users";
import Loader from "./common/Loader";
import {
    getCurrentPage,
    getFollowUnfollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../redux/usersSelectors";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPageHandler = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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
                    followThunkCreator = {this.props.followThunkCreator}
                    unFollowThunkCreator = {this.props.unFollowThunkCreator}
                    isFetching = {this.props.isFetching}
                    followUnfollowInProgress = {this.props.followUnfollowInProgress}
                />
            </>
        )
    }
}



// dispatch закинет сюда connect
// Без селекторов
// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followUnfollowInProgress: state.usersPage.followUnfollowInProgress
//     }
// }


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


// // Без compose
// const UsersWithRedirect = withAuthRedirect(UsersContainer)
// export default connect(mapStateToProps,{
//     setUsers,
//     setCurrentPage,
//     setTotalCount,
//     getUsersThunkCreator,
//     followThunkCreator,
//     unFollowThunkCreator
// })(UsersContainer)

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followUnfollowInProgress: getFollowUnfollowInProgress(state)
})

export default connect(mapStateToProps,{
        setUsers,
        setCurrentPage,
        setTotalCount,
        getUsersThunkCreator,
        followThunkCreator,
        unFollowThunkCreator
    })(UsersContainer)
