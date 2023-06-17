import React from 'react';

import s from './Button.module.css'

const Button = ({xType, callBack, disabled, ...restProps}) => {
    const finalClassName = `
        ${s.button}
        ${disabled ? s.disabled : xType === 'red' ? s.red : xType === 'secondary' ? s.secondary : s.default}
    `
    return (
        <button
            disabled={disabled}
            className={finalClassName}
            onClick={callBack}
            {...restProps}
        />
    )
};

export default Button;