import React from 'react';
import s from './Message.module.css';

type PropsType = {
    avatar: string
    name: string
    message: string
    timeMessage: string

}

const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={s.itemPost}>
            <div className={s.itemAvatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.itemText}>
                <div className={s.itemName}>{props.name}</div>
                <div className={s.itemMessenger}>{props.message}</div>
                <div className={s.itemTime}>{props.timeMessage}</div>
            </div>

        </div>
    );
}

export default Message;
