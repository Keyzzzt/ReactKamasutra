import React from 'react'
import style from '../../styles/Dialogs.module.css'


export const Message = ({ message }) => {
    return (
        <div className={style.message}>{message}</div>

    )
}

export default Message
