import React from 'react';

import s from './Contacts.module.css'
import containerStyles from "../common/styles/Container.module.css";
import Input from "../common/input/Input";

const Contacts = () => {
    return (
        <section className={s.contactsBlock}>
            <div className={`${containerStyles.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <from className={s.contactsForm}>
                    <Input type={'text'}/>
                    <Input type={'text'}/>
                    <textarea/>
                </from>
                    <a className={s.button} href='#'>Send</a>
            </div>
        </section>
    );
};

export default Contacts;