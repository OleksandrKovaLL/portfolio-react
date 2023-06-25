import React from 'react';

import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.navList}>
                    <a href="">Main</a>
                    <a href="">Skills</a>
                    <a href="">Projects</a>
                    <a href="">Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;