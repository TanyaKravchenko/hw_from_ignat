import React from 'react';
import Affair from './Affair';
import {AffairType, FilterType} from './HW2';
import classes from './Affairs.module.css';

type AffairsPropsType = {
    title: string;
    data: Array<AffairType>;
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (id: string) => void;
    filter: FilterType;
};

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a.id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));
    const onAllChangeFilter = () => props.setFilter('All');
    const onHighChangeFilter = () => props.setFilter('High');
    const onMiddleChangeFilter = () => props.setFilter('Middle');
    const onLowChangeFilter = () => props.setFilter('Low');

    const onAllFilter = props.filter === 'All' ? classes.active : '';
    const onHighFilter = props.filter === 'High' ? classes.active : '';
    const onMiddleFilter = props.filter === 'Middle' ? classes.active : '';
    const onLowFilter = props.filter === 'Low' ? classes.active : '';

    return (
        <div>
            <div className={classes.AffairsContainer}>
                <h3 className={classes.AffairsHeader}>{props.title}</h3>
                <div className={classes.MappedAffairs}>{mappedAffairs}</div>
                <div className={classes.TaskButton}>
                    <button onClick={onAllChangeFilter} className={onAllFilter}>
                        All
                    </button>
                    <button onClick={onHighChangeFilter} className={onHighFilter}>
                        High
                    </button>
                    <button onClick={onMiddleChangeFilter} className={onMiddleFilter}>
                        Middle
                    </button>
                    <button onClick={onLowChangeFilter} className={onLowFilter}>
                        Low
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Affairs;
