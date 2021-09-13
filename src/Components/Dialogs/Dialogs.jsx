import React from 'react'
import s from './../../styles/Dialogs.module.css'
import Message from './Message'
import DialogItem from "./DialogItem";
import DialogMessageForm from "../Forms/Dialog";

const Dialogs = (props) => {
    const onSubmitHandler = (formData) => {
        props.sendMessage(formData.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} />)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message key={m.id} message={m.message} />)}
            </div>
            <DialogMessageForm onSubmitHandler={onSubmitHandler}/>
        </div>


    )
}

export default Dialogs