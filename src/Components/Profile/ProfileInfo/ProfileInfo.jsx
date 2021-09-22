import React from 'react'
import s from './../../../styles/Profile.module.css'
import Loader from "../../common/Loader";
import ProfileStatus from "../ProfileStatus";
import ProfileStatusHooks from "../ProfileStatusHooks";


const ProfileInfo = ({profile, status, updateStatusThunkCreator}) => {
    if (!profile){
        return <Loader />
    }
  return (
    <div>
      <img className={s.profileBackground} src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="background" />
      <div className={s.profileInfo}>
        <h3>Profile Info</h3>
          <ProfileStatusHooks status={status} updateStatusThunkCreator={updateStatusThunkCreator}/>
          <img src={profile.photos.small} alt=""/>
          <div>Имя: {profile.fullName}</div>
          <div>About Me: {profile.aboutMe}</div>
          <div>Ищу работу: {profile.lookingForAJob ? 'Да' : 'Нет'}</div>
      </div>
    </div>
  );
}

export default ProfileInfo
