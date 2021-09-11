import React from 'react'
import s from './../../styles/Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "../MyPostsContainer";


const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
      <MyPostsContainer />
    </div>
  );
}

export default Profile
