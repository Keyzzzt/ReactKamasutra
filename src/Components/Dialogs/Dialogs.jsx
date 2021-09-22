import React from 'react'
import style from './../../styles/Dialogs.module.css'
import Message from './Message'
import DialogItem from "./DialogItem";
import DialogMessageForm from "../Forms/Dialog";

const Dialogs = ({dialogs, messages, sendMessage}) => {
    const onSubmitHandler = (formData) => {
        sendMessage(formData.newMessageBody)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} />)}
            </div>
            <div className={style.messages}>
                {messages.map(m => <Message key={m.id} message={m.message} />)}
            </div>
            <DialogMessageForm onSubmitHandler={onSubmitHandler}/>
        </div>


    )
}

export default Dialogs