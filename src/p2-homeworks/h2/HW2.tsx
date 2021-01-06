import React, {useState} from 'react';
import Affairs from './Affairs';
import {v1} from 'uuid';

export type AffairPriorityType = 'High' | 'Middle' | 'Low'

export type AffairType = {
    id: string
    title: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType;

const defaultAffairs: Array<AffairType> = [
    {id: v1(), title: 'Tasty', priority: 'Low'},
    {id: v1(), title: 'Friends', priority: 'High'},
    {id: v1(), title: 'Shopping', priority: 'Low'},
    {id: v1(), title: 'Travels', priority: 'Middle'},
    {id: v1(), title: 'Family', priority: 'High'}
];

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') return affairs;
    if (filter === 'High') {
        return affairs.filter(task => task.priority === 'High')
    }
    if (filter === 'Middle') {
        return affairs.filter(task => task.priority === 'Middle')
    }
    if (filter === 'Low') {
        return affairs.filter(task => task.priority === 'Low')
    } else return affairs;
}
export const deleteAffair = (affairs: Array<AffairType>, id: string): Array<AffairType> => {
    return affairs.filter(t => t.id != id);
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (id: string) => setAffairs(deleteAffair(affairs, id));
    return (
        <div>
            <Affairs
                title={'TodoList'}
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    );
}

export default HW2;
