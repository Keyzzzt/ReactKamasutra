import React from 'react'
import './../styles/Profile.module.css'

const Profile = () => {
    return (
      <div className='content'>
        <img src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="background" />
          <div className="profile">
            avatar + description
          </div>
          <div className="posts">
            Posts
            <div className="new-post">
              New Post
            </div>
            <div className="item">
              Post1
            </div>
            <div className="item">
              Post1
            </div>
          </div>
      </div>
    );
}

export default Profile
