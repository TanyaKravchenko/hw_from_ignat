import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import preloader from '../../images/RtKg.gif';
import s from '../h10/HW10.module.css';

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
                dispatch(loadingAC(false))
            }, 2000
        )
    };

    return (
        <div>
            <div className={s.preloaderContainer}>
                <hr/>
                homeworks 10
                {/*should work (должно работать)*/}
                {loading
                    ? (<div className={s.preloaderImg}>
                            <img src={preloader} alt={'isFetching'}/>
                        </div>
                    ) : (
                        <div className={s.preloaderButton}>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
