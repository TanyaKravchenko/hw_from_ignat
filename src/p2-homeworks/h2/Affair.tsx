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
    const priorityClasses = classes.AffairItem + ' ' + classes[props.affair.priority]

    return (
        <div className={classes.AffairWrapper}>
            <div className={classes.AffairItem}>{props.affair.title}</div>
            <div className={priorityClasses}>{props.affair.priority}</div>
            <div className={classes.AffairItem}>
                <button
                    className={classes.RemoveButton}
                    onClick={deleteCallback}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default Affair;
