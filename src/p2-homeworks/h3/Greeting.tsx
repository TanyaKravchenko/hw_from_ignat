import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from "./Greeting.module.css";
import {UserType} from './HW3';

type GreetingPropsType = {
    users: Array<UserType>
    name: string
    error: string | null
    onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressAddItem: (e: KeyboardEvent<HTMLInputElement>) => void
    onAddItemClick: () =>  void
    setError: (error: string | null) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {users,name, error, onTitleChange, onKeyPressAddItem, onAddItemClick, setError} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.nameInput;

    return (
        <div onBlur={() => setError(null)}>
            <input
                className={inputClass}
                type="text"
                value={name}
                onChange={onTitleChange}
                onKeyPress={onKeyPressAddItem}
            />
            <button className={s.nameButton} onClick={onAddItemClick}>name</button>
            {<div className={s.errorMessage}>{error}</div>}
            <span className={s.countName}>countName:{users.length}</span>
        </div>
    );
}

export default Greeting;
