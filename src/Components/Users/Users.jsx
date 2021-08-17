import React from 'react'
import * as axios from "axios";
import styles from '../../styles/Users.module.css'
import noFoto from '../../assets/images/noLogo.png'

class Users extends React.Component{
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
        let totalUserPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i = 1; i <= totalUserPages; i++){
            pages.push(i)
        }


        return (
            <div >
                <div>
                    {pages.map(page => <span onClick={(e) => {this.setCurrentPageHandler(page)}} className={this.props.currentPage === page && styles.selected}>{`${page} `}</span>)}
                </div>
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