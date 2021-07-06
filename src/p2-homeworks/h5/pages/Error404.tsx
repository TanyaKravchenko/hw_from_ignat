import React from 'react';
import s from './Pages.module.css';
import img from './../../../images/oops.png';

function Error404() {
    return (
        <div>
            <div className={`${s.page} ${s.errorPage}`}>
                <div className={s.numberError}>404</div>
                <div className={s.errorText}>Oops...Page not found!</div>
                <div className={s.img}><img
                    src={img}
                    alt=""/></div>
            </div>
        </div>
    );
}

export default Error404;
