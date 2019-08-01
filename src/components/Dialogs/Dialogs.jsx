import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{ props.message }</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Alex' id='1' />
                <DialogItem name='Anna' id='2' />
                <DialogItem name='Suhail' id='3' />
                <DialogItem name='Pavels' id='4' />
                <DialogItem name='Edgars' id='5' />
                <DialogItem name='Arsens' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi!!!' />
                <Message message='Hello!' />
                <Message message='How are you?' />
            </div>
        </div>
    )
}

export default Dialogs