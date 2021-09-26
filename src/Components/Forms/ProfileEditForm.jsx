import React from "react";
import {reduxForm} from "redux-form";
import style from "../../styles/Profile.module.css";
import {createField, Input} from "../common/FormsControls/FormsControls";
import styles from "../common/FormsControls/formControls.module.css";

const ProfileEditForm = ({handleSubmit, profile, error}) => {
    // const maxLength20 = () => maxLengthCreator(20)
    return (
        // onSubmit объявляем там, где мы рисуем форму
        <form onSubmit={handleSubmit} className={style.profileInfo}>
            <button>Save</button>
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <b>Full name: </b>{createField('fullName', 'text', 'Enter full name...', Input, [])}
            </div>
            <div>
                <b>Looking for a job: </b>{createField('lookingForAJob', '', '', Input, [], '', {type: "checkbox"})}
            </div>
            <div>
                <b>About me: </b>{createField('aboutMe', 'text', 'About me...', Input, [])}
            </div>
            <div>
                <b>Job
                    description: </b>{createField('lookingForAJobDescription', 'text', 'Job description...', Input, [])}
            </div>


            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}</b>: {createField(`contacts.${key}`, 'text', key, Input, [])}
                </div>
            })}</div>
        </form>
    )
}

const ProfileEditReduxForm = reduxForm({form: 'editProfile'})(ProfileEditForm);

export default ProfileEditReduxForm

