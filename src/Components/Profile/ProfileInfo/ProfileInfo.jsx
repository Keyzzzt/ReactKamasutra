import React from 'react'
import s from './../../../styles/Profile.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <img className={s.profileBackground} src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="background" />
      <div className={s.profileInfo}>
        <h3>Profile Info</h3>
        avatar + description
      </div>
    </div>
  );
}

export default ProfileInfo
