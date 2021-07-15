import React from 'react'
import s from './../../styles/Dialogs.module.css'
import { NavLink } from 'react-router-dom'


export const DialogItem = ({ name, id }) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;