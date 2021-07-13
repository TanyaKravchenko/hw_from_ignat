import React, {useEffect, useState} from 'react';
import {requestsAPI} from './RequestsAPI';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from '../h13/HW13.module.css';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';

export const Request = () => {
    const [information, setInformation] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)

    const setCheckBox = () => {
        setChecked(!checked)
    }

    useEffect(() => {
        requestsAPI.post(checked)
            .then((res) => {
                setInformation(res.data.errorText)
            })
            .catch(error => {
                setInformation(error.response ? error.response.data.errorText : error.message);
            })
    }, [checked])

    return (
        <div className={s.wrapper}>
            <div className={s.checkboxWrapper}>
                <SuperCheckbox onChange={setCheckBox}/>
            </div>
            <div className={s.text}>{JSON.stringify(information)}</div>
            <div>
                <SuperButton onClick={setCheckBox}>push</SuperButton>
            </div>
        </div>
    );
}