import React from 'react'
import s from './../../styles/Dialogs.module.css'
import DialogItem from './DialogItem'
import Message from './Message'
import { updateMessageTextAC, createNewMessage } from '../../redux/state'

const Dialogs = (props) => {
    const messageTextHandler = (e) => {
        let text = e.target.value
        props.dispatch(updateMessageTextAC(text))
    }
    const sendMessageHandler = () => {
        props.dispatch(createNewMessage())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(el => <DialogItem name={el.name} id={el.id} />)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message} />)}
            </div>

            <input type="text" onChange={messageTextHandler} value={props.newMessageText} />
            <button onClick={sendMessageHandler}>Send message</button>
        </div>


    )
}

export default Dialogs