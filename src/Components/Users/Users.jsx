import React from 'react'

const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            { id: 1, name: 'Bond', status: '007', location: { country: 'USA', city: "LA"}, follow: true},
            { id: 2, name: 'James', status: '007', location: { country: 'UK', city: "London"}, follow: true},
            { id: 3, name: 'James Bond', status: '007', location: { country: 'France', city: "Paris"}, follow: false},
        ])
    }
    const followUnfollowHandler = (userId) => props.followUnfollow(userId)



    return (
        <div>
            {props.users.map(user => {
            return (
                <div>
                    <div>ID: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>Status: {user.status}</div>
                    <div>Location:
                        <div>City: {user.location.city} Country:  {user.location.country}</div>
                    </div>
                    <button onClick={() => followUnfollowHandler(user.id)}>{user.follow ? 'UnFollow' : 'Follow'}</button>
                </div>
            )
        })}</div>
    )
}

export default Users