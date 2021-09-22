import React from "react";
import Pagination from "../common/Pagination/Pagination";
import SingleUser from "./SingleUser";

const Users = ({totalUsersCount, pageSize, currentPage, setCurrentPageHandler, users, unFollow, follow, followUnfollowInProgress}) => {
    let totalUserPages = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for(let i = 1; i <= totalUserPages; i++){
        pages.push(i)
    }
    return (
        <div >
            <Pagination setCurrentPageHandler={setCurrentPageHandler} currentPage={currentPage} pageSize={pageSize} totalUsersCount={totalUsersCount}/>
            {users.map(user => <SingleUser user={user} follow={follow} unFollow={unFollow} followUnfollowInProgress={followUnfollowInProgress} key={user.id}/>)}
        </div>
    )
}

export default Users