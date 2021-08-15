import React from 'react'
import * as axios from "axios";
import styles from '../../styles/Users.module.css'
import noFoto from '../../assets/images/noLogo.png'

class Users extends React.Component{
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response =>{
                this.props.setUsers(response.data.items)
            })

    }
    followUnfollowHandler = (userId) => this.props.followUnfollow(userId)

    render(){
        return (
            <div >
                {this.props.users.map(user => {
                    return (
                        <div className={styles.user}>
                            <div >
                                <img className={styles.userPhoto} src={user.photos.small ? user.photos.small : noFoto} alt=""/>
                            </div>
                            <div>
                                <div>ID: {user.id}</div>
                                <div>Name: {user.name}</div>
                                <button onClick={() => this.followUnfollowHandler(user.id)}>{user.follow ? 'UnFollow' : 'Follow'}</button>
                            </div>
                        </div>
                    )
                })}</div>
        )
    }
}

export default Users