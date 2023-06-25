import React from 'react'

import s from './Main.module.css'
import containerStyles from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <section className={s.mainBlock}>
            <div className={`${containerStyles.container} ${s.mainContainer}`}>
                    <div className={s.text}>
                        <span>Hi there</span>
                        <h1>Oleksandr Koval</h1>
                        <p>Front-End Developer</p>
                    </div>
                    <div className={s.photo}></div>
            </div>
        </section>
    );
};

export default Main;