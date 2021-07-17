import React from 'react'
import s from './../../styles/Dialogs.module.css'
import DialogItem from './DialogItem'
import Message from './Message'

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(el => <DialogItem name={el.name} id={el.id} />)}

            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message} />)}
            </div>
        </div>
    )
}

export default Dialogs