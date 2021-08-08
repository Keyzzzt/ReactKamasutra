import React from 'react'
import s from '../../styles/Dialogs.module.css'


export const Message = ({ message }) => {
    return (
        <div className={s.message}>{message}</div>

    )
}

export default Message
