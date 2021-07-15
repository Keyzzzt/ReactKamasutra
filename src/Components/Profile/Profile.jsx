import React from 'react'
import s from './../../styles/Profile.module.css'
import MyPosts from './Myposts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile
