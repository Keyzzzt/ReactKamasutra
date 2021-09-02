import React from "react";
import styles from "../../styles/Users.module.css";
import noFoto from "../../assets/images/noLogo.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {followUnfollowInProgress, toggleIsFollowing} from "../../redux/reducers/usersReducer";

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
                                <button onClick={() => {
                                    props.toggleIsFollowing(true, user.id)
                                    usersAPI.unFollow(user.id)
                                        .then(resultCode => {
                                            if(resultCode === 0){
                                                props.unFollow(user.id)
                                            }
                                            props.toggleIsFollowing(false, user.id)
                                        })
                                }}      // Если данный userId есть в массиве followUnfollowInProgress, тогда дизейблим кнопку
                                        disabled={props.followUnfollowInProgress.some(id => id === user.id)}
                                >Unfollow</button>
                            ) : (
                                <button onClick={() => {
                                    props.toggleIsFollowing(true, user.id)
                                    usersAPI.follow(user.id)
                                        .then(resultCode => {
                                            if(resultCode === 0){
                                                props.follow(user.id)
                                            }
                                            props.toggleIsFollowing(false, user.id)
                                        })
                                }} disabled={props.followUnfollowInProgress.some(id => id === user.id)}>Follow</button>

                            )}
                        </div>
                    </div>
                )
            })}</div>
    )
}

export default Users