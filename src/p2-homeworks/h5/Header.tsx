import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {PATH} from './Routes';

function Header() {
    return (
        <div className={s.headerMenuContainer}>
            <div className={s.container}>
                <div className={s.navLinkItems}>
                    <NavLink to={PATH.PRE_JUNIOR} className={s.navLink} activeClassName={s.active}> PreJunior </NavLink>
                    <NavLink to={PATH.JUNIOR} className={s.navLink} activeClassName={s.active}> Junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS} className={s.navLink} activeClassName={s.active}> JuniorPlus</NavLink>
                    <NavLink to={PATH.HW1} className={s.navLink} activeClassName={s.active}> Homework 1</NavLink>
                    <NavLink to={PATH.HW2} className={s.navLink} activeClassName={s.active}> Homework 2</NavLink>
                    <NavLink to={PATH.HW3} className={s.navLink} activeClassName={s.active}> Homework 3</NavLink>
                    <NavLink to={PATH.HW4} className={s.navLink} activeClassName={s.active}> Homework 4</NavLink>
                    <NavLink to={PATH.HW6} className={s.navLink} activeClassName={s.active}> Homework 6</NavLink>
                    <NavLink to={PATH.HW7} className={s.navLink} activeClassName={s.active}> Homework 7</NavLink>
                    <NavLink to={PATH.HW8} className={s.navLink} activeClassName={s.active}> Homework 8</NavLink>
                    <NavLink to={PATH.HW9} className={s.navLink} activeClassName={s.active}> Homework 9</NavLink>
                    <NavLink to={PATH.HW10} className={s.navLink} activeClassName={s.active}> Homework 10</NavLink>
                    <NavLink to={PATH.HW11} className={s.navLink} activeClassName={s.active}> Homework 11</NavLink>
                    <NavLink to={PATH.HW12} className={s.navLink} activeClassName={s.active}> Homework 12</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;
