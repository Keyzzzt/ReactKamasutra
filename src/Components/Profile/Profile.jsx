import React from 'react'
import style from './../../styles/Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "../MyPostsContainer";


const Profile = ({profile, status, updateStatusThunkCreator, isOwner, updateProfileImage}) => {
  return (
    <div className={style.content}>
      <ProfileInfo profile={profile} status={status} updateStatusThunkCreator={updateStatusThunkCreator} isOwner={isOwner} updateProfileImage={updateProfileImage}/>
      <MyPostsContainer />
    </div>
  );
}

export default Profile
