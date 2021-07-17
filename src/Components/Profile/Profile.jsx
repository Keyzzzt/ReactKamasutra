import React from 'react'
import s from './../../styles/Profile.module.css'
import MyPosts from './Myposts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
}

export default Profile
