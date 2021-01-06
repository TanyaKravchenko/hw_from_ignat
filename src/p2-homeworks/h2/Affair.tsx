import React from 'react';
import {AffairType} from './HW2';
import classes from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: string) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair.id)
    };

    return (
        <div className={classes.AffairWrapper}>
            <span>{props.affair.title} - </span>
            <span>{props.affair.priority} - </span>
            <button className={classes.RemoveButton} onClick={deleteCallback}>Remove</button>
        </div>
    );
}

export default Affair;
