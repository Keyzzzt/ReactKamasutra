import React from "react";
import styles from "../../styles/Users.module.css";
import noFoto from "../../assets/images/noLogo.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let totalUserPages = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i = 1; i <= totalUserPages; i++){
        pages.push(i)
    }

    return (
        <div >
            <div>
                {pages.map(page => <span onClick={(e) => {props.setCurrentPageHandler(page)}} className={props.currentPage === page && styles.selected}>{`${page} `}</span>)}
            </div>
            {props.users.map(user => {
                return (
                    <div className={styles.user}>
                        <div >
                            <NavLink to={`/profile/${user.id}`}>
                                <img className={styles.userPhoto} src={user.photos.small ? user.photos.small : noFoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            <div>ID: {user.id}</div>
                            <div>Name: {user.name}</div>
                            {user.followed ? (
                                <button onClick={() => {props.unFollowThunkCreator(user.id) }} disabled={props.followUnfollowInProgress.some(id => id === user.id)}>Unfollow</button>
                            ) : (
                                <button onClick={() => {props.followThunkCreator(user.id)}} disabled={props.followUnfollowInProgress.some(id => id === user.id)}>Follow</button>
                            )}
                        </div>
                    </div>
                )
            })}</div>
    )
}

export default Users