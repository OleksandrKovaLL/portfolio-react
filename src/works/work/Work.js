import React from 'react';

import s from './Work.module.css'
import Button from "../../common/button/Button";

const Work = (props) => {
    return (
        <div className={s.work}>
            <div className={s.iconBlock}>
                <div>Image</div>
                 <a className={s.showButton} href='#'>Show</a>
            </div>
            <div className={s.descriptionBlock}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>
                    {props.description}
                </span>
            </div>
        </div>
    );
};

export default Work;