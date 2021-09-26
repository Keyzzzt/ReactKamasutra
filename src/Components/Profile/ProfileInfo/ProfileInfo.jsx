import React, {useState} from 'react'
import style from './../../../styles/Profile.module.css'
import Loader from "../../common/Loader";
import ProfileStatusHooks from "../ProfileStatusHooks";
import noPhoto from "../../../assets/images/noLogo.png";
import ProfileEditForm from "../../Forms/ProfileEditForm";


const ProfileInfo = ({profile, updateStatusThunkCreator, isOwner, updateProfileImage, saveProfile, editProfileSuccess}) => {
    const [editMode, setEditMode] = useState(false)
    const onImageSelected = (e) => {
        if (e.target.files.length) {
            updateProfileImage(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData)
        if(editProfileSuccess){
            setEditMode(false)
        }
    }

    if (!profile) {
        return <Loader/>
    }
    return (
        <div>
            <img className={style.profileBackground}
                 src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="background"/>
            <img src={profile.photos.small || noPhoto} alt=""/>
            {isOwner && <div><input onChange={onImageSelected} type="file"/></div>}

            {/*Передав profile в специальный props initialValues, redux-form автоматически возмет оттуда данные полей и вставит их как value в поля формы*/}
            {/*Этот initialValues даже не нужно получать как props в форме*/}
            {editMode && <ProfileEditForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>}

            {!editMode &&
            <ProfileData profile={profile} updateStatusThunkCreator={updateStatusThunkCreator} isOwner={isOwner}
                         goToEditMode={() => setEditMode(true)}/>
            }
        </div>
    );
}
const ProfileData = ({profile, updateStatusThunkCreator, isOwner, goToEditMode}) => {
    return (

        <div className={style.profileInfo}>
            {isOwner && <button onClick={goToEditMode}>Edit profile</button>}
            <h3>Profile Data</h3>

            <ProfileStatusHooks status={profile.status} updateStatusThunkCreator={updateStatusThunkCreator}/>
            <div>Имя: {profile.fullName}</div>
            <div>About Me: {profile.aboutMe}</div>
            <div>Ищу работу: {profile.lookingForAJob ? 'Да' : 'Нет'}</div>
            <div>Job
                description: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'Not specified'}</div>
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}</div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div><b>{contactTitle}</b>: {contactValue ? contactValue : 'Not specified'}</div>
    )
}


export default ProfileInfo
