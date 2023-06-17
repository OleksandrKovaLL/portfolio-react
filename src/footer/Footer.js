import React from 'react';

import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footerBlock}>
            <h2>Oleksandr Koval</h2>
            <div className={s.socials}>
                <div className={s.socialItem}></div>
                <div className={s.socialItem}></div>
                <div className={s.socialItem}></div>
                <div className={s.socialItem}></div>
            </div>
            <p>©All rights are reserved</p>
        </footer>
    );
};

export default Footer;