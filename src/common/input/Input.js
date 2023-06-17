import React from 'react';

import s from './Input.module.css'

const Input = ({type, error, onChange, ...restProps}) => {

    const onChangeCallback = (e) => {
        onChange?.(e.currentTarget.value)
    }

    const finalSpanClassName = s.span

    const finalInputClassName = s.input
        + (error ? ' ' + s.errorInput : ' ' + s.superInput)

    return (
        <div className={s.inputWrapper}>
            <input
                type={type}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps}
            />
            <span
                className={finalSpanClassName}
            >
                {error}
            </span>
        </div>
    )
};

export default Input;