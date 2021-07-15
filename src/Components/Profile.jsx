import React from 'react'
import s from'./../styles/Profile.module.css'
import MyPosts from './Profile/Myposts/MyPosts'


const Profile = () => {
    return (
      <div className={s.content}>
        <img className={s.profileBackground} src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="background" />
          <div className={s.profile}>
            avatar + description
          </div>
          <MyPosts/>
      </div>
    );
}

export default Profile
