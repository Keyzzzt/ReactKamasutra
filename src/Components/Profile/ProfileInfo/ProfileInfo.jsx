import React from 'react'
import s from './../../../styles/Profile.module.css'
import Loader from "../../common/Loader";
import ProfileStatusHooks from "../ProfileStatusHooks";
import noPhoto from "../../../assets/images/noLogo.png";



const ProfileInfo = ({profile, status, updateStatusThunkCreator, isOwner, updateProfileImage}) => {
    const onImageSelected = (e) => {
        if(e.target.files.length){
            updateProfileImage(e.target.files[0])
        }
    }

    if (!profile){
        return <Loader />
    }
  return (
    <div>
      <img className={s.profileBackground} src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="background" />
      <div className={s.profileInfo}>
        <h3>Profile Info</h3>
          <ProfileStatusHooks status={status} updateStatusThunkCreator={updateStatusThunkCreator}/>
          <img src={profile.photos.small || noPhoto} alt=""/>
          {isOwner && <div><input onChange={onImageSelected} type="file" /></div>}
          <div>Имя: {profile.fullName}</div>
          <div>About Me: {profile.aboutMe}</div>
          <div>Ищу работу: {profile.lookingForAJob ? 'Да' : 'Нет'}</div>
      </div>
    </div>
  );
}

export default ProfileInfo
