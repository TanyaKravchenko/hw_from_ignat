import React from 'react';
import Affair from './Affair';
import {AffairType, FilterType} from './HW2';
import classes from './Affairs.module.css';

type AffairsPropsType = {
    title: string
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: string) => void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a.id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    const onAllChangeFilter = () => props.setFilter('all')
    const onHighChangeFilter = () => props.setFilter('High')
    const onMiddleChangeFilter = () => props.setFilter('Middle')
    const onLowChangeFilter = () => props.setFilter('Low')

    return (
        <div>
            <div className={classes.AffairsContainer}>
                <h3 className={classes.AffairsHeader}>{props.title}</h3>
                <div className={classes.AffairsWrapper}>
                    <ul className={classes.mappedAffairs}>
                        {mappedAffairs}
                    </ul>
                </div>
                <div className={classes.TaskButton}>
                    <button onClick={onAllChangeFilter}>All</button>
                    <button onClick={onHighChangeFilter}>High</button>
                    <button onClick={onMiddleChangeFilter}>Middle</button>
                    <button onClick={onLowChangeFilter}>Low</button>
                </div>
            </div>
        </div>
    );
}

export default Affairs;
