import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    let [name, setName] = useState<string>('');
    let [error, setError] = useState<string | null>(null);

    function sayHallo(name: string) {
        if (name) {
            alert('Hi ' + name);
            addUserCallback(name);
        }
        setName('');
    }

    const onAddItemClick = () => {
        if (name.trim() !== '') {
            sayHallo(name);
        } else {
            setError('Title is required')
        }
    }
    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null);
        setName(e.currentTarget.value)
    }
    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            onAddItemClick()
        }
    }

    return (
        <Greeting
            users={users}
            name={name}
            onTitleChange={onTitleChange}
            error={error}
            onKeyPressAddItem={onKeyPressAddItem}
            onAddItemClick={onAddItemClick}
            setError={setError}
        />
    );
}

export default GreetingContainer;
