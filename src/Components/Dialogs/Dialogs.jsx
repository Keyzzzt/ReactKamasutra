import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../../styles/Dialogs.module.css'
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='James' id='1' />
                <DialogItem name='Bond' id='2' />
                <DialogItem name='James Bond' id='3' />
            </div>
            <div className={s.messages}>
                <Message message='Hello from James' />
                <Message message='Hello from Bond' />
                <Message message='Hello from James Bond' />
            </div>
        </div>
    )
}

export default Dialogs