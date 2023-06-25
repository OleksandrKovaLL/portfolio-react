import React from 'react';

import containerStyles from '../common/styles/Container.module.css'
import s from './Works.module.css'
import Work from "./work/Work";

const Works = () => {
    return (
        <section className={s.worksBlock}>
            <div className={`${containerStyles.container} ${s.worksContainer}`}>
                <h2>My works</h2>
                <div className={s.works}>
                    <Work title={'Social'} description={'This is my pet project, will would show my skills'}/>
                    <Work title={'Shop'} description={'This is my pet project, which will show my skills'}/>
                    <Work title={'Todolist'} description={'This is my pet project, which will show my skills'}/>
                </div>
            </div>
        </section>
    );
};

export default Works;