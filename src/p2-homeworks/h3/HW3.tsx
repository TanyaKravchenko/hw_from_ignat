import React, {useState} from 'react';
import GreetingContainer from './GreetingContainer';
import {v1} from 'uuid';
import s from './Greeting.module.css'

export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([]);

    const addUserCallback = (name: string) => {
        let recordName = {id: v1(), name: name}
        setUsers([...users, recordName])
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <div className={s.greetingContainer}>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    );
}

export default HW3;
