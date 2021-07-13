import React from 'react';
import s from './HW12.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {RequestThemesType, changeThemeAC} from './bll/themeReducer';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, RequestThemesType>((state) => state.theme.isTheme)
    const dispatch = useDispatch()

    const onChangeCallback = (isTheme: RequestThemesType) => {
        dispatch(changeThemeAC(isTheme))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                <div>
                 <SuperRadio
                     name={'radio'}
                     options={themes}
                     value={theme}
                     onChangeOption={onChangeCallback}
                 />
                </div>
            </span>

            {/*should work (должно работать)*/
            }
            {/*SuperSelect or SuperRadio*/
            }

        </div>
    );
}

export default HW12;
