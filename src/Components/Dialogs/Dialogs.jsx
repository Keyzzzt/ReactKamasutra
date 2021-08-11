import React from 'react'
import s from './../../styles/Dialogs.module.css'
import Message from './Message'
import DialogItem from "./DialogItem";

const Dialogs = (props) => {
    const messageTextHandler = (e) => {
        let text = e.target.value
        props.updateMessageText(text)
    }
    const sendMessageHandler = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} />)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message key={m.id} message={m.message} />)}
            </div>
            {props.a}
            <input type="text" onChange={messageTextHandler} value={props.newMessageText} />
            <button onClick={sendMessageHandler}>Send message</button>
        </div>


    )
}

export default Dialogs